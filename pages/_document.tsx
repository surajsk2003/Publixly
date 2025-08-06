import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6171104448709105"
             crossOrigin="anonymous"></script>
        <script async custom-element="amp-auto-ads"
                src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6WL5XTWK4P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6WL5XTWK4P');
            `,
          }}
        />
      </Head>
      <body>
        <div dangerouslySetInnerHTML={{ 
          __html: '<amp-auto-ads type="adsense" data-ad-client="ca-pub-6171104448709105"></amp-auto-ads>' 
        }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}