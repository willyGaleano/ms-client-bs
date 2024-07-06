export class ResponseWrapper<T> {
  constructor(
    private readonly message: string,
    private readonly data: T = null,
  ) {
    this.message = message;
    this.data = data;
  }

  getMessage(): string {
    return this.message;
  }

  getData(): T {
    return this.data;
  }
}
