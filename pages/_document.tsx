import { Html, Head, Main, NextScript } from "next/document";

const about = "about me - jhyahav";
const description =
  "Jonathan Yahav's portfolio site, built with React and Three.js.";
const icon = "/android-chrome-512x512.png";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="Jonathan Yahav" />
        <meta name="twitter:site" content={about} />
        <meta name="twitter:title" content={about} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={icon} />
        <meta property="og:title" content={about} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={icon} />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
