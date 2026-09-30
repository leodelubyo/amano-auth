export async function onRequest(context) {
  // Fetch keys.json from the same deployment
  const url = new URL(context.request.url);
  url.pathname = "/keys.json";
  
  const response = await context.env.ASSETS.fetch(url);
  
  return new Response(response.body, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache"
    }
  });
}
