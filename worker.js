const NAME_RE = /^[a-z0-9_]{1,64}$/;
const LABEL_RE = /^[a-z0-9_]{1,64}$/i;

function sanitizeLabel(label) {
  if (typeof label !== "string") return null;
  const cleaned = label.toLowerCase().replace(/[^a-z0-9_]+/g, "_").slice(0, 64);
  return LABEL_RE.test(cleaned) ? cleaned : null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/track" && request.method === "POST") {
      try {
        const { name, props } = await request.json();
        if (typeof name === "string" && NAME_RE.test(name)) {
          const label = sanitizeLabel(props && props.label);
          const key = label ? `count:${name}:${label}` : `count:${name}`;
          const current = parseInt((await env.ANALYTICS_KV.get(key)) || "0", 10);
          await env.ANALYTICS_KV.put(key, String(current + 1));
        }
      } catch {
        // ignore malformed beacons
      }
      return new Response(null, { status: 204 });
    }

    if (url.pathname === "/api/stats" && request.method === "GET") {
      const auth = (request.headers.get("Authorization") || "").trim();
      const expected = `Bearer ${(env.STATS_TOKEN || "").trim()}`;
      if (!env.STATS_TOKEN || auth !== expected) {
        return new Response("Unauthorized", { status: 401 });
      }
      const counts = {};
      const list = await env.ANALYTICS_KV.list({ prefix: "count:" });
      for (const { name: key } of list.keys) {
        counts[key.slice("count:".length)] = parseInt((await env.ANALYTICS_KV.get(key)) || "0", 10);
      }
      return Response.json(counts);
    }

    return env.ASSETS.fetch(request);
  },
};
