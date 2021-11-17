interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
// TODO
export default async function getIp<T>(): Promise<T> {
  const apiKey = "14f3b8a0a31747fe816f6f83957be60c";

  const response: HttpResponse<T> = await fetch(
    "https://api.ipgeolocation.io/getip/?api_key=" + apiKey
  );

  return response.json();
}
