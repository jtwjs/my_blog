export default class Generator<T> {
  private readonly key: string;

  constructor(key: string, initData: T) {
    this.key = key;
    !this.load() && this.save(initData);
  }

  save(data: T): void {
    return localStorage.setItem(this.key, JSON.stringify(data));
  }

  load() {
    return JSON.parse(localStorage.getItem(this.key) as string);
  }

  remove(): void {
    localStorage.removeItem(this.key);
  }
}
