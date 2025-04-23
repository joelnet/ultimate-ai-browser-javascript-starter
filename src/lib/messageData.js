/** @typedef {import('../types/index.js').SuccessMessageData} SuccessMessageData */
/** @typedef {import('../types/index.js').ErrorMessageData} ErrorMessageData */

/**
 * Returns either a Success or Error Message
 * @returns {SuccessMessageData | ErrorMessageData}
 */
export function getMessageData() {
  const successMessage = { message: 'Success' };
  const errorMessage = { error: 'Error' };
  return Math.random() > 0.5 ? successMessage : errorMessage;
}
