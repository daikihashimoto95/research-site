# Research Site - MDX Content Guide

## アイコン記法

マークダウン内で絵文字記法を使ってアイコンを表示できます。

### 使用可能なアイコン一覧

#### 一般
- `:person:` - 人物アイコン
- `:memo:` - メモ・鉛筆アイコン
- `:notebook:` - ノートアイコン
- `:books:` - 本アイコン
- `:star:` - 星アイコン
- `:award:` - 賞・トロフィーアイコン
- `:pin:` - ピン・場所アイコン
- `:world:` - 地球・ウェブアイコン
- `:file:` - ファイルアイコン
- `:presentation:` - プレゼンテーションアイコン

#### 連絡先
- `:email:` - メールアイコン
- `:github:` - GitHubアイコン
- `:twitter:` または `:twitter-bird:` - Twitter鳥アイコン
- `:x:` - X (Twitter)アイコン
- `:linkedin:` - LinkedInアイコン
- `:orcid:` - ORCID iDアイコン
- `:building:` - 所属・組織アイコン
- `:school:` - 大学・学校アイコン

#### ステータス
- `:check:` - チェックマーク
- `:x:` - バツマーク
- `:alert:` - 警告アイコン
- `:info:` - 情報アイコン

### 使用例

```markdown
## :person: 橋本大輝

:email: example@university.ac.jp  
:github: [username](https://github.com/username)  
:orcid: [0000-0000-0000-0000](https://orcid.org/0000-0000-0000-0000)

## :memo: 研究紹介

量子多体傷跡状態について研究しています。
```

---

## マークダウンでコンテンツを編集する方法

このサイトではMDX（Markdown + JSX）を使用してコンテンツを管理できます。

### ディレクトリ構造

```
src/
└── content/
    └── pages/          # 全てのページ（About、Research、Papers、Talksなど）
        ├── about.mdx
        ├── research.mdx
        ├── papers.mdx  # 全論文を1つのファイルにまとめる
        └── talks.mdx   # 全トークを1つのファイルにまとめる
```

### 新しいページの作成方法

#### 1. 静的ページを作成する

`src/content/pages/` ディレクトリに `.mdx` ファイルを作成します。

```mdx
---
title: "ページタイトル"
description: "ページの説明"
date: "2025-12-19"
---

# 見出し

ここにコンテンツを書きます。

## サブセクション

- リスト項目1
- リスト項目2
```

アクセスURL: `/page/ファイル名` （例: `about.mdx` → `/page/about`）

#### 2. 論文一覧を編集する

`src/content/pages/papers.mdx` を直接編集します（全論文を1つのファイルにまとめます）。

```mdx
---
title: "Publications"
date: "2025-12-19"
---

## Papers

- **論文タイトル1**  
  著者名1, 著者名2, ...  
  *会議名 または 雑誌名* (年)  
  Status: In prep / Submitted / Published / Preprint  
  論文の簡単な説明
  {/* [arXiv](https://arxiv.org/abs/xxxx.xxxxx) | [PDF](/files/paper.pdf) */}

- **論文タイトル2**  
  著者名...  
  *venue* (year)  
  説明...
```

アクセスURL: `/papers`

#### 3. トーク一覧を編集する

`src/content/pages/talks.mdx` を直接編集します（全トークを1つのファイルにまとめます）。

```mdx
---
title: "Talks & Presentations"
date: "2025-12-19"
---

## Talks

- **トークタイトル1**  
  会議名 • 日付  
  Type: Poster / Talk  
  トークの説明
  {/* [Slides](/files/slides.pdf) */}

- **トークタイトル2**  
  会議名 • 日付  
  Type: Talk  
  説明...
```

アクセスURL: `/talks`

### Frontmatterの設定項目

#### 全ページ共通

| 項目 | 必須 | 説明 |
|------|------|------|
| `title` | ✓ | ページタイトル |
| `description` | - | 説明文 |
| `date` | ✓ | 日付（YYYY-MM-DD形式） |

### Markdownの記法

#### 見出し
```markdown
# H1見出し
## H2見出し
### H3見出し
```

#### テキスト装飾
```markdown
**太字**
*イタリック*
`インラインコード`
```

#### リスト
```markdown
- 順序なしリスト
- 項目2

1. 順序付きリスト
2. 項目2
```

#### リンク
```markdown
[リンクテキスト](https://example.com)
```

#### 引用
```markdown
> 引用文
```

#### コードブロック
````markdown
```python
def hello():
    print("Hello, World!")
```
````

### カスタムコンポーネントの使用

MDXではshadcn/uiのコンポーネントも使用できます。

```mdx
<Card>
  <CardHeader>
    <CardTitle>カードタイトル</CardTitle>
    <CardDescription>カードの説明</CardDescription>
  </CardHeader>
  <CardContent>
    カードの内容
  </CardContent>
</Card>

<Button>ボタン</Button>
```

### ファイルの追加後

1. ファイルを `src/content/pages/` に保存
2. 開発サーバーを再起動: `npm run dev`
3. ブラウザでアクセス

### 例: Papers一覧の編集

`src/content/pages/papers.mdx`:
```mdx
---
title: "Publications"
date: "2025-12-19"
---

## Papers

- **Asymptotic quantum many-body scars in SU(N) Hubbard models**  
  D. Hashimoto, A. Collaborator  
  *Physical Review B* (2025)  
  Status: Published  
  量子多体傷の研究について
  [arXiv](https://arxiv.org/abs/2501.12345) | [Journal](https://doi.org/10.1103/PhysRevB)

- **Another research paper**  
  D. Hashimoto, et al.  
  *in preparation* (2026)  
  Status: In prep  
  進行中の研究...
```

アクセス: `http://localhost:3000/papers`

## 使い方まとめ

1. **新しいページを追加**: `src/content/pages/新しいページ.mdx` を作成
2. **論文を追加**: `src/content/pages/papers.mdx` を編集して項目を追加
3. **トークを追加**: `src/content/pages/talks.mdx` を編集して項目を追加
4. **フロントマター**: ファイルの先頭に `---` で囲んだメタデータを記述
5. **アクセス**: 
   - 一般ページ: `/page/ファイル名`
   - 論文一覧: `/papers`
   - トーク一覧: `/talks`

### 論文・トークの管理

- **論文**: `src/content/pages/papers.mdx` を1つのファイルとして管理
- **トーク**: `src/content/pages/talks.mdx` を1つのファイルとして管理
- 各項目はマークダウンのリスト形式で記述
- リンクはMDXコメント `{/* */}` でコメントアウト可能
