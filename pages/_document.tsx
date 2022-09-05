import { Html, Head, Main, NextScript } from "next/document";
import { introText } from "../lib/text";

const about = "Jonathan Yahav - About me";
const description =
  "Hi, I'm Jonathan. Welcome to my portfolio site! " + introText;
const icon = "/logo.png";

export default function Document() {
  return (
    <Html>
      <Head>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index" />
        <meta name="description" content={description} />
        <meta name="googlebot" content="notranslate" />
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
