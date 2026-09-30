export async function onRequest(context) {
  const url = new URL(context.request.url);
  const authKey = url.searchParams.get("auth_key") || "unknown";
  const serverIP = url.searchParams.get("server_ip") || "unknown";
  const clientIP = context.request.headers.get("CF-Connecting-IP") || "unknown";
  const time = new Date().toISOString();
  
  const logLine = `[${time}] key=${authKey} server=${serverIP} client=${clientIP}`;
  console.log(logLine);
  
  return new Response("ok", {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
