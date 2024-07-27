/**
 * Retrieves an item from the session storage based on the provided key.
 * @param key - The key of the item to retrieve.
 * @returns The retrieved item, or undefined if the item does not exist.
 */
export const getFromSession = (key: string) => {
  const obj = window?.sessionStorage?.getItem(key);
  if (obj && obj.length) {
    return JSON.parse(obj);
  } else return undefined;
};

/**
 * Saves an item to the session storage with the provided key.
 * @param key - The key to associate with the item.
 * @param item - The item to save.
 */
export const seveToSession = (key: string, item: any) => {
  window?.sessionStorage?.setItem(key, JSON.stringify(item));
};

/**
 * Removes an item from the session storage based on the provided key.
 * @param key - The key of the item to remove.
 */
export const removeFromSession = (key: string) => {
  window?.sessionStorage?.removeItem(key);
};

/**
 * Retrieves an item from the local storage based on the provided key.
 * @param key - The key of the item to retrieve.
 * @returns The retrieved item, or undefined if the item does not exist.
 */
export const getFromLocalStorage = (key: string) => {
  if (global.window !== undefined) {
    const obj = localStorage?.getItem(key);
    if (obj && obj.length) {
      const parsedObj = JSON.parse(obj);
      // return parsedObj;
      return convertISOStringsToDateObjects(parsedObj);
    } else return undefined;
  }
};

/**
 * Saves an item to the local storage with the provided key.
 * @param key - The key to associate with the item.
 * @param item - The item to save.
 */
export const saveToLocalStorage = (key: string, item: any) => {
  window?.localStorage?.setItem(key, JSON.stringify(item));
};

/**
 * Removes an item from the local storage based on the provided key.
 * @param key - The key of the item to remove.
 */
export const removeFromLocalStorage = (key: string) => {
  window?.localStorage?.removeItem(key);
};

// Function to check if a string is an ISO date
function isISODateString(str: string): boolean {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(str);
}

// Function to convert properties in an object from ISO strings to Date objects
function convertISOStringsToDateObjects(obj: any): any {
  for (const key in obj) {
    if (typeof obj[key] === "string" && isISODateString(obj[key])) {
      obj[key] = new Date(obj[key]);
    } else if (typeof obj[key] === "object") {
      obj[key] = convertISOStringsToDateObjects(obj[key]);
    }
  }
  return obj;
}
