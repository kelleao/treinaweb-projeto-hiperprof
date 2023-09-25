export interface ResponseErroInterface<T = unknown> {
  errors?: T;
  message: string;
}
