const EVENT_NAMES = new Set([
  "hero_social_click",
  "hero_cta_contact",
  "hero_cta_view_work",
  "contact_cta_book_call",
  "contact_link_click",
  "footer_cta_book_call",
  "footer_social_click",
  "mobile_sticky_cta",
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/track" && request.method === "POST") {
      try {
        const { name } = await request.json();
        if (EVENT_NAMES.has(name)) {
          const key = `count:${name}`;
          const current = parseInt((await env.ANALYTICS_KV.get(key)) || "0", 10);
          await env.ANALYTICS_KV.put(key, String(current + 1));
        }
      } catch {
        // ignore malformed beacons
      }
      return new Response(null, { status: 204 });
    }

    if (url.pathname === "/api/stats" && request.method === "GET") {
      if (url.searchParams.get("token") !== env.STATS_TOKEN) {
        return new Response("Unauthorized", { status: 401 });
      }
      const counts = {};
      for (const name of EVENT_NAMES) {
        counts[name] = parseInt((await env.ANALYTICS_KV.get(`count:${name}`)) || "0", 10);
      }
      return Response.json(counts);
    }

    return env.ASSETS.fetch(request);
  },
};
