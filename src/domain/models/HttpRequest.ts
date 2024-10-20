export interface HttpRequest {
  body: object;
  params: unknown;
  query: unknown;
  headers: { [key: string]: string };
}