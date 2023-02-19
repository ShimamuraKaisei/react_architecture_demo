// 共通エラークラス
export class BaseError extends Error {
    constructor(e?: string) {
      super(e);
      this.name = new.target.name;
      Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class NetworkAccessError extends BaseError {
  constructor(public statusCode: number, e?: string) {
    super(e);
  }
}

export class ValidationError extends BaseError {};