import Cookies from 'universal-cookie';

/**
 * @description Create Cookies instance
 */
const instance = new Cookies();

/**
 * @description Clear all cookies
 */
const clear = () => {
  const cookies = instance.getAll();
  for (const key in cookies) {
    if (Object.prototype.hasOwnProperty.call(cookies, key)) {
      instance.remove(key);
    }
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  instance,
  clear
};
