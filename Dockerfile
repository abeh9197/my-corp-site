# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションファイルをコピー
COPY . .

# ポート3000を開放
EXPOSE 3000

# Next.jsアプリを起動
CMD ["npm", "run", "dev"]
