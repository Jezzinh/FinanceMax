import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quiz Financeiro - Descubra seu Potencial de Economia',
  description: 'Transforme sua vida financeira em 30 dias. Descubra quanto você pode economizar com o FinanceMax Pro.',
  openGraph: {
    title: 'Quiz Financeiro - Transforme sua Vida Financeira',
    description: 'Mais de 27.843 pessoas já organizaram suas finanças. Faça o quiz gratuito e descubra seu potencial!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.FACEBOOK_PIXEL_ID || ''}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
               src={`https://www.facebook.com/tr?id=${process.env.FACEBOOK_PIXEL_ID || ''}&ev=PageView&noscript=1`} />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}