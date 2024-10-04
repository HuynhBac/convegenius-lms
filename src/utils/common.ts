const debounce = (callback: Function, delay: number) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const throttle = (callback: Function, delay: number) => {
  let shouldWait = false;
  let incomingArgs: any = null;

  return (...args: any) => {
    if (shouldWait) {
      incomingArgs = args;
      return;
    }

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
      if (incomingArgs !== null) {
        callback(...incomingArgs);
        incomingArgs = null;
      }
    }, delay);
  };
};

export const Common = {
  debounce,
  throttle,
};
