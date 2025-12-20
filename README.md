# Research Site

研究活動を紹介するための個人Webサイトです。Next.js + MDX + Tailwind CSSで構築されています。

## 必要な環境

- Node.js 20.x 以上
- npm

## セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/daikihashimoto95/research-site.git
cd research-site
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000/research-site](http://localhost:3000/research-site) を開いて確認できます。

## プロジェクト構成

```
research-site/
├── src/
│   ├── app/              # Next.js App Router のページ
│   │   ├── page.tsx      # トップページ (/)
│   │   ├── page/[slug]/  # 動的ページ (/page/[slug])
│   │   ├── publications/ # 論文一覧ページ (/publications)
│   │   ├── presentations/# 発表一覧ページ (/presentations)
│   │   └── talks/        # トーク一覧ページ (/talks)
│   ├── components/       # Reactコンポーネント
│   ├── content/          # MDXコンテンツファイル
│   │   └── pages/        # 各ページのMDXファイル
│   └── lib/              # ユーティリティ関数
├── public/               # 静的ファイル
└── scripts/              # ビルドスクリプト
```

## コンテンツの編集

コンテンツは `src/content/pages/` ディレクトリ内のMDXファイルで管理されています。

- `index.mdx` - トップページ
- `publications.mdx` - 論文一覧
- `presentations.mdx` - 発表一覧

MDXファイルを編集すると、開発サーバーが自動的にリロードします。

詳細は [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) を参照してください。

## ビルド

本番用のビルドを作成する場合:

```bash
npm run build
```

ビルド後、以下のコマンドでローカルで本番環境を確認できます:

```bash
npm run start
```

## 技術スタック

- **フレームワーク**: [Next.js 16](https://nextjs.org/) (App Router, Static Export)
- **言語**: TypeScript
- **スタイリング**: [Tailwind CSS v4](https://tailwindcss.com/)
- **コンテンツ**: [MDX](https://mdxjs.com/) + [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **UIコンポーネント**: [Radix UI](https://www.radix-ui.com/)
- **アイコン**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **テーマ**: [next-themes](https://github.com/pacocoursey/next-themes)
- **MDX処理**:
  - rehype-autolink-headings
  - rehype-pretty-code
  - rehype-slug
  - remark-gfm

## デプロイ

このプロジェクトは GitHub Pages にデプロイされます。

### 自動デプロイ

`main` ブランチにプッシュすると、GitHub Actions が自動的にビルドして GitHub Pages にデプロイします。

デプロイワークフローは `.github/workflows/deploy.yml` で定義されています。

### 手動デプロイ

GitHub リポジトリの "Actions" タブから手動でワークフローを実行することもできます。

### デプロイ設定

- **出力形式**: Static Export (`output: 'export'`)
- **ベースパス**: `/research-site`
- **出力ディレクトリ**: `./out`

Next.js の Static Export について詳しくは、[Next.js デプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)を参照してください。
