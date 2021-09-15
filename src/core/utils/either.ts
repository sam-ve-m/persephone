export class Response<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isResponse(): this is Response<L, A> {
    return true;
  }

  isError(): this is Error<L, A> {
    return false;
  }
}

export class Error<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isResponse(): this is Response<L, A> {
    return false;
  }

  isError(): this is Error<L, A> {
    return true;
  }
}

export type Either<L, A> = Response<L, A> | Error<L, A>;

export const response = <L, A>(l: L): Either<L, A> => {
  return new Response<L, A>(l);
};

export const error = <L, A>(a: A): Either<L, A> => {
  return new Error<L, A>(a);
};
