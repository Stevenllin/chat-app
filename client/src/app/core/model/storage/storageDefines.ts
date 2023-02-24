import { StorageKeysEnum, StorageTypesEnum } from 'app/core/enum/storage';

export const StorageDefines: Readonly<Record<StorageKeysEnum, StorageTypesEnum>> = {
  [StorageKeysEnum.Authorization]: StorageTypesEnum.Session,
}
