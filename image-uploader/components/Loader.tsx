import Image from "next/image";
const Loader = () => {
  return (
    <div className="w-[400px] h-[144px] flex flex-col justify-around bg-white shadow-xl rounded-xl p-10">
      <h1 className="text-primary font-medium self-start">
        Uploading. Please wait.
      </h1>
      <div className="w-full bg-[#F2F2F2] rounded-lg overflow-hidden">
        <div className="animate-barLoader min-h-[.5rem] w-[5rem] rounded-[8px] bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Loader;
