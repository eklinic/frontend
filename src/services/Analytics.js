import Script from 'next/script'


const Analytics = () => (
    <>
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-VF3MJZEZWZ`}
        />
        <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VF3MJZEZWZ', {
              page_path: window.location.pathname,
            });
          `
            }}
        />
    </>
)

export default Analytics
