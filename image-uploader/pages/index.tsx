import Head from "next/head";
import type { NextPage } from "next";
import Upload from "../components/Upload";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Image Uploader</title>
        <meta name="description" content="image uploader in devchallenges" />
        <meta name="author" content="Ted Dino" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Upload />
      </main>
    </div>
  );
};

export default Home;
