/**
 * generate random id
 */
export function generateId () {
  return Math.random().toString(36).substr(2)
}
