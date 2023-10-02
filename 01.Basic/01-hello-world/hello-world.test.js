const helloWorld = require('./hello-world');

test("Returning 'Hello, World!' as a string", () => {
  const result = helloWorld();
  console.log(result)
  expect(result).toBe('Hello World!');
});
