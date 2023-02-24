import { CookieSetOptions, CookieGetOptions } from 'universal-cookie';
import cookieService from "./cookieService";
import { StorageDefines } from "app/core/model/storage";
import { StorageKeysEnum, StorageTypesEnum } from "app/core/enum/storage";

const setItem = (key: StorageKeysEnum, value: string, option?: CookieSetOptions) => {
  switch (StorageDefines[key]) {
    case (StorageTypesEnum.Session): {
      localStorage.setItem(key, value);
      break;
    }
    case (StorageTypesEnum.Local): {
      sessionStorage.setItem(key, value);
      break;
    }
    case (StorageTypesEnum.Cookies): {
      cookieService.instance.set(key, value, option);
      break;
    }
  }
}

const getItem = (key: StorageKeysEnum, option?: CookieGetOptions) => {
  switch (StorageDefines[key]) {
    case (StorageTypesEnum.Session): {
      return localStorage.getItem(key)
    }
    case (StorageTypesEnum.Local): {
      return sessionStorage.getItem(key)
    }
    case (StorageTypesEnum.Cookies): {
      return cookieService.instance.get(key, option)
    }
  }
}

const removeItem = (key: StorageKeysEnum, option?: CookieSetOptions) => {
  switch (StorageDefines[key]) {
    case (StorageTypesEnum.Session): {
      localStorage.removeItem(key)
      break;
    }
    case (StorageTypesEnum.Local): {
      sessionStorage.removeItem(key)
      break;
    }
    case (StorageTypesEnum.Cookies): {
      cookieService.instance.remove(key, option)
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setItem,
  getItem,
  removeItem
};
