import { ImageResponse } from 'next/og'

// 静的エクスポート用の設定
export const dynamic = 'force-static'
export const revalidate = false

// 画像のメタデータ
export const alt = '橋本大輝 / Daiki Hashimoto - Research homepage'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// OG画像の生成
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(to bottom right, #1e293b, #334155)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          橋本大輝 / Daiki Hashimoto
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#94a3b8',
          }}
        >
          Research homepage
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
