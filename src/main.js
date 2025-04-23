async function main() {
  const root = document.getElementById('root');
  if (!root) throw new Error('root element not found.');

  root.textContent = getHelloWorld();
}

export function getHelloWorld() {
  return 'Hello World';
}

main().catch(err => console.error(err));
