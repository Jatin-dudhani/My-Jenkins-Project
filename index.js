function greet(name) {
  return `Hello, ${name}! Welcome to Jenkins Learning!`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, add };

if (require.main === module) {
  console.log(greet(process.env.NAME || 'World'));
}