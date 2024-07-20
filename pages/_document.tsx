import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title> СТРОЙПЛИТ </title>
          <meta name="description" content="Купить тротуарную плитку и брусчатку в Сергиевом Посаде. Стройплит предлагает качественные строительные материалы по выгодным ценам." />
          <meta name="keywords" content="стройплит, стройплит сергиев посад, тротуарная плитка, брусчатка, цемент, бордюр, бордюр дорожный, бордюр тротураный, блоки, блок строительный, блок керамзитный, блок пустотелый, блок полнотелый" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;