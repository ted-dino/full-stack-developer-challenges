import Error from "../components/Error";
import Head from "next/head";
import Loader from "../components/Loader";
import type { NextPage } from "next";
import Upload from "../components/Upload";
import Uploaded from "../components/Uploaded";
import { useState } from "react";

const Home: NextPage = () => {
  const [file, setFile] = useState<File | string>("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const renderPage = () => {
    if (error) {
      return <Error message={`${error.message}`} />;
    } else if (!file && loading) {
      return (
        <Upload
          setFile={setFile}
          setFileName={setFileName}
          setLoading={setLoading}
          setError={setError}
        />
      );
    } else if (file && loading) {
      return <Loader />;
    } else if (!error && file && !loading) {
      return <Uploaded fileName={fileName} />;
    }
  };

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
        {renderPage()}
      </main>
    </div>
  );
};

export default Home;
