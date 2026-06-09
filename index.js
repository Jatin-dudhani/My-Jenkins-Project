export function greet(name) {
  return `Hello, ${name}! Welcome to Jenkins Learning!`;
}

export function add(a, b) {
  return a + b;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet(process.env.NAME || 'World'));
}