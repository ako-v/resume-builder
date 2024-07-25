const debounce = (callback: () => void, timeout: NodeJS.Timeout | null, duration: number) => {
  timeout && clearTimeout(timeout);
  return setTimeout(callback, duration);
};

export default debounce;
