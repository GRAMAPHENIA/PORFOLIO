import Footer from '@/components/sections/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/sections/Header'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'
import BgDecorator from '@/components/BgDecorator'
import ThemeSwitch from '@/components/ThemeSwitch'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Di corato JP || Portfolio',
  description: 'Generada por Gramaphenicos'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html suppressHydrationWarning lang="es" className="!scroll-smooth">
      {/* Google Tag Manager Snippet */}

      <Script id="google-tag-manger" strategy="afterInteractive">
        {`
        
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        
        `}
      </Script>

      <body
        className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Providers>
          <Header />
          <BgDecorator />
          {children}
          <Footer />
          <ThemeSwitch />
        </Providers>
        <Toaster position="top-right" />

        {/* Google tag manager */}

        {GTM_ID && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
        )}
      </body>
    </html>
  )
}
