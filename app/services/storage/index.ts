import { BackblazeB2Service } from './backblazeB2';

export interface StorageService {
  getFileUrl(fileName: string): string;
}

export let storageService: StorageService | undefined;

export function setStorageService(service: StorageService) {
  storageService = service;
}

// 初期化関数
export function initializeStorageService() {
  const useBackblaze = true;

  if (useBackblaze) {
    const backblazeService = new BackblazeB2Service();
    setStorageService(backblazeService);
  }
}
