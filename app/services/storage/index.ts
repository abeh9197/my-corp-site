import { BackblazeB2Service } from './backblazeB2';

export interface StorageService {
  uploadFile(file: Buffer, fileName: string): Promise<string>;
  getFileUrl(fileName: string): Promise<string>;
}

export let storageService: StorageService | undefined;

export function setStorageService(service: StorageService) {
  storageService = service;
}

// 初期化関数
export function initializeStorageService() {
  const useBackblaze = true;

  if (useBackblaze) {
    const apiUrl = process.env.B2_API_URL!;
    const authToken = process.env.B2_APPLICATION_KEY!;
    const bucketName = process.env.B2_BUCKET_NAME!;

    setStorageService(new BackblazeB2Service(apiUrl, authToken, bucketName));
  }
}
