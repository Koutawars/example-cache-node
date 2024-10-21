export interface HttpRequest {
  body: object;
  params: { [key: string]: string };
  query: unknown;
  headers: { [key: string]: string };
}