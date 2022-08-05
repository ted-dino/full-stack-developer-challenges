import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { supabase } from "../utils/supabaseClient";

const Uploaded = ({ fileName }: { fileName: string }) => {
  const [link, setLink] = useState<string | undefined>("");
  const [clipboard, setClipboard] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const { data, error } = supabase.storage
          .from("images")
          .getPublicUrl(fileName);
        if (error) {
          throw error;
        }
        setLink(data?.publicURL);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
        console.log("Unexpected Error", error);
      }
    };

    check();
  }, [fileName]);

  const copyToClipboard = (path: string) => {
    if (path !== undefined) {
      navigator.clipboard.writeText(path);
      setClipboard(true);
    }
  };

  return (
    <div className="w-[400px] h-[470px] bg-white shadow-xl rounded-xl flex flex-col justify-evenly items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 fill-green-700"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className="text-lg text-primary">Uploaded Successfully</h1>
      <Link href={link ? link : ""}>
        <a target="_blank" rel="noopener noreferrer">
          <Image
            className="rounded-xl object-contain"
            src={link ? link : "/404.jpg"}
            width={338}
            height={225}
            alt="image not found"
          />
        </a>
      </Link>

      <div className="w-[338px] bg-gray-200 relative h-9 flex items-center rounded-xl p-1">
        <small className="flex-1 text-left text-primary truncate">{link}</small>
        <button
          onClick={() => copyToClipboard(link!)}
          className="px-5 bg-blue-500 h-[30px] text-white text-xs rounded-lg border border-blue-500 hover:bg-transparent hover:text-blue-500"
        >
          {clipboard ? "Copied" : "Copy Link"}
        </button>
      </div>
    </div>
  );
};

export default Uploaded;
