export class NodePool<T> {
  private pool: T[] = [];

  constructor(private createFunc: () => T) {}

  acquire(): T {
    return this.pool.pop() || this.createFunc();
  }

  release(obj: T) {
    this.pool.push(obj);
  }
}
