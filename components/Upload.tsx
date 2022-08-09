import { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import Link from "next/link";
import { supabase } from "../utils/supabaseClient";

interface Props {
  setFile: (value: string | File) => void;
  setFileName: (path: string) => void;
  setLoading: (value: boolean) => void;
  setError: (value: Error) => void;
}

const Upload = ({ setFile, setFileName, setLoading, setError }: Props) => {
  const uploadPic = async (
    image: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    if (image && image.currentTarget.files) {
      const file = image.currentTarget.files[0];
      const MAX_SIZE = 52428800; // Supabase Upload file size limit
      const pattern = /image-*/;

      if (!file.type.match(pattern)) {
        alert("Invalid Format");
        return;
      }
      if (file.size > MAX_SIZE) {
        alert(
          "File size is too large; select a picture that is less than 50MB"
        );
        return;
      }
      try {
        setLoading(true);
        if (
          !image?.currentTarget.files ||
          image?.currentTarget.files.length === 0
        ) {
          throw new Error("You must select an image to upload.");
        }
        const file = image.currentTarget.files[0];
        const fileExt = file.name.split(".").pop();
        const uniqueID = Math.random().toString(36).slice(2, 9);
        const filePath = `${uniqueID}.${fileExt}`;
        setFile(file);
        setFileName(filePath);

        let { error: uploadError } = await supabase.storage
          .from("images")
          .upload(filePath, file);

        if (uploadError) {
          setError(uploadError);
          throw uploadError;
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-[400px] h-[470px] bg-white shadow-xl rounded-xl flex flex-col justify-evenly items-center">
      <h1 className="text-lg text-primary">Upload your image</h1>
      <small className="text-xs text-secondary">
        File should be jpeg, png or{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types">
          <a className="underline"> this</a>
        </Link>
      </small>
      <div className="bg-[#F6F8FB] h-[220px] w-[338px] flex flex-col justify-around rounded-xl border-2 border-dashed border-blue-500 relative hover:bg-slate-200 ">
        <Image src="/image.svg" width={115} height={89} alt="-" priority />
        <small className="text-xs text-accent">
          Drag & Drop your image here
        </small>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          className="absolute inset-0 opacity-0 w-full cursor-pointer"
          onChange={uploadPic}
        />
      </div>
      <span className="text-xs text-accent">Or</span>
      <label
        htmlFor="image"
        className="bg-blue-500 text-white text-xs py-2 px-4 rounded-lg cursor-pointer border border-blue-500 hover:bg-transparent hover:text-blue-500"
      >
        Choose a file
      </label>
    </div>
  );
};

export default Upload;
