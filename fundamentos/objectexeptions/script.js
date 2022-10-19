class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

console.log(typeof new MyError('wrongBoii'));
console.log(new MyError('wrongBoii') instanceof MyError);
console.log(new MyError('wrongBoii') instanceof Error);
console.log(new MyError('wrongBoii').name);
throw new MyError('wrongBoii');
// throw new Error('wrongBoii');