/** @typedef {import('./types/index.js').SuccessMessageData} SuccessMessageData */
/** @typedef {import('./types/index.js').ErrorMessageData} ErrorMessageData */
import { getMessageData } from './lib/messageData.js';

async function main() {
  const root = document.getElementById('root');
  if (!root) throw new Error('root element not found.');

  const data = getMessageData();

  if ('error' in data) {
    root.textContent = `Error: ${data.error}`;
  } else {
    root.textContent = `Success: ${data.message}`;
  }
}

main().catch(err => console.error(err));
