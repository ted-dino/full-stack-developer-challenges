import Link from "next/link";
const Error = ({ message }: { message: string }) => {
  return (
    <div className="text-left text-primary w-[400px] h-[144px] flex flex-col justify-around bg-white shadow-xl rounded-xl p-10">
      <div className="error ">
        <h1 className=" font-medium self-start">An error occurred.</h1>
        <p>{`Error: ${message}`}</p>
      </div>
      <small>
        or post the problem{" "}
        <Link href="https://github.com/ted-dino/full-stack-developer-challenges/issues">
          <a className="underline">here</a>
        </Link>{" "}
      </small>
    </div>
  );
};

export default Error;
