function fibonacci(n) {
  let a = 0;
  let b = 1;

  let result = [];

  console.log(a);
  console.log(b);

  for (i = 2; i < n; i++) {
    let next = a + b;
    result.push(next);
    console.log(next);

    a = b;
    b = next;
  }
  return result;
}

console.log("fibonacci called", fibonacci(10));
