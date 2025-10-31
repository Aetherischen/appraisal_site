export async function onRequest({ request, next }: any) {
  const res = await next();

  const accept = request.headers.get("accept") || "";
  const url = new URL(request.url);
  const isGet = request.method === "GET";
  const isHtml = accept.includes("text/html");
  const hasFileExtension = /\.[^/]+$/.test(url.pathname);

  if (res.status === 404 && isGet && isHtml && !hasFileExtension) {
    return fetch(new URL("/index.html", request.url));
  }

  return res;
}
