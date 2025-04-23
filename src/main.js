async function main() {
  const root = document.getElementById('root');
  root.textContent = getHelloWorld();
}

export function getHelloWorld() {
  return 'Hello World';
}

main().catch(err => console.error(err));
