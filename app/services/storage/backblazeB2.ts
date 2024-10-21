import AWS from 'aws-sdk';

export class BackblazeB2Service {
    private bucketName: string;
    private baseUrl: string;

    constructor() {
      this.bucketName = process.env.B2_BUCKET_NAME!;
      this.baseUrl = `https://f005.backblazeb2.com/file/${this.bucketName}`;
    }

    getFileUrl(fileName: string): string {
        return `${this.baseUrl}/${fileName}`;
    }
  }
