import AWS from 'aws-sdk';

export class BackblazeB2Service {
  private s3: AWS.S3;
  private bucketName: string;

  constructor() {
    this.s3 = new AWS.S3({
      endpoint: 'https://s3.us-west-002.backblazeb2.com', // B2のS3エンドポイント
      accessKeyId: process.env.B2_KEY_ID, // 環境変数からキーIDを取得
      secretAccessKey: process.env.B2_APPLICATION_KEY, // 環境変数からアプリケーションキーを取得
      signatureVersion: 'v4', // S3互換の署名バージョン
    });
    this.bucketName = process.env.B2_BUCKET_NAME!; // バケット名を環境変数から取得
  }

  // 署名付きURLを生成する関数
  async getSignedUrl(fileName: string): Promise<string> {
    const params = {
      Bucket: this.bucketName,
      Key: fileName,
      Expires: 60 * 10, // 署名付きURLの有効期限（ここでは10分）
    };

    // 署名付きURLを生成
    const url = this.s3.getSignedUrl('getObject', params);
    return url;
  }
}
