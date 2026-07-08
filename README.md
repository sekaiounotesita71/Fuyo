# 合同会社芙蓉 コーポレートサイト

合同会社芙蓉 / Fuyo LLC の1ページ完結LP型コーポレートサイトです。Next.js、TypeScript、Tailwind CSSで構築し、Vercel公開を前提にしています。

## 起動方法

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

本番ビルド確認は以下です。

```bash
npm run build
npm run start
```

## 編集箇所

- `data/site.ts`: 会社情報、ナビゲーション、サービス、料金、FAQ、問い合わせ選択肢
- `app/layout.tsx`: SEOメタ情報、OGP、フォント、サイトURL
- `app/page.tsx`: 1ページLPのセクション順序
- `components/`: 各セクションの表示コンポーネント
- `app/globals.css`: 全体スタイル、余白、アニメーション
- `public/images/hero-food-export.png`: ヒーロー画像

将来的に英語版を追加する場合は、`data/site.ts` を `data/ja.ts`、`data/en.ts` のように分け、`app/en/page.tsx` を追加する構成にすると拡張しやすいです。

## 環境変数

`.env.example` を参考に `.env.local` を作成します。

```bash
NEXT_PUBLIC_SITE_URL=https://fuyo-link.com
NEXT_PUBLIC_CONTACT_EMAIL=info@fuyo-link.com
NEXT_PUBLIC_FORMSPREE_ENDPOINT=
```

`NEXT_PUBLIC_FORMSPREE_ENDPOINT` が空の場合、問い合わせフォームは `mailto:` でメール作成画面を開きます。

## Formspree設定方法

1. [Formspree](https://formspree.io/) でアカウントを作成します。
2. 新しいフォームを作成します。
3. 発行されたエンドポイントURLをコピーします。
4. `.env.local` に設定します。

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
```

5. 開発サーバーを再起動します。

Formspree利用時は、フォームが直接FormspreeへPOSTされます。未設定時はメール送信用の本文を生成してメールアプリを開きます。

## デプロイ方法

本番ビルドが通ることを確認します。

```bash
npm run build
```

その後、GitHubなどのリポジトリへアップロードし、Vercelに接続します。

## Vercel公開方法

1. Vercelで「Add New Project」を選択します。
2. このリポジトリをインポートします。
3. Framework Preset が `Next.js` になっていることを確認します。
4. Environment Variables に以下を設定します。
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
5. Deployを実行します。
6. 独自ドメインを使う場合は、VercelのProject SettingsからDomainを追加します。

## 実装メモ

- DBは不要な構成です。
- OGP画像は `public/images/hero-food-export.png` を使用しています。
- スクロール演出はCSSのみで軽量にしています。
- コンポーネント分割済みのため、将来的な複数ページ化や英語版追加に対応しやすい構造です。
