import Image from "next/image";
import Link from "next/link";

const Upload = () => {
  return (
    <div className="w-[400px] h-[470px] bg-white shadow-xl rounded-xl flex flex-col justify-evenly items-center">
      <h1 className="text-lg text-primary">Upload your image</h1>
      <small className="text-xs text-secondary">
        File should be jpeg, png{" "}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types">
          <a className="underline"> or this</a>
        </Link>
      </small>
      <div className="bg-[#F6F8FB] h-[220px] w-[338px] flex flex-col justify-around rounded-xl border border-dashed border-blue-500">
        <Image src="/image.svg" width={115} height={89} alt="-" />
        <small className="text-xs text-accent">
          Drag & Drop your image here
        </small>
      </div>
      <span className="text-xs text-accent">Or</span>
      <button className="bg-blue-500 text-white text-xs py-2 px-4 rounded-lg">
        Choose a file
      </button>
    </div>
  );
};

export default Upload;
