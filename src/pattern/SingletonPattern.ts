export function SingletonPattern<T>() {
  return class SingletonPattern {
    private static instance: T;

    protected constructor() {}

    public static getInstance(): T {
      if (!this.instance) this.instance = new this() as T;
      return this.instance;
    }
  };
}
