import Head from "next/head";
import Calculator from "./../components/Calculator";
export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator Challenge</title>
        <meta
          name="Calculator"
          content="Challenge by Frontend Mentor. Coded by https://github.com/alopezprlp."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Calculator />
    </>
  );
}
