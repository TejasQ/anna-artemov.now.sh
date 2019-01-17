import Document, { Head, Main, NextScript } from "next/document";
import { COLORS } from "../util/constants";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="de">
        <Head>
          <meta
            name="description"
            content="Anna Martens-Artemov, Dipl. Sozialpädagogin, Coach für Persönlichkeitsentwicklung und Teams. Zertifizierte
          Elternkurstrainerin für Starke Eltern - Starke Kinder sowie PEP4Kids, das Positive Erziehungsprogramm."
          />
          <link href="/static/style.css" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, height=device-height, user-scalable=0, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color={COLORS.PRIMARY} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
        </body>
      </html>
    );
  }
}
