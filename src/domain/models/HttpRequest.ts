export interface HttpRequest <T = object> {
  body: Partial<T>;
  params: { [key: string]: string };
  query: unknown;
  headers: { [key: string]: string };
}