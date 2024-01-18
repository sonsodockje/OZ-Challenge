class Queue<T> {
  #items: T[] = [];

  enqueue(item: T): void {
    this.#items.push(item);
  }
  dequeue(): T | undefined {
    return this.#items.shift();
  }
  size(): number {
    return this.#items.length;
  }
}

const queue = new Queue<string>();
queue.enqueue("Apple");
queue.enqueue("Banana");
console.log(queue.dequeue()); // Apple
console.log(`Queue size: ${queue.size()}`); // Queue size: 1
