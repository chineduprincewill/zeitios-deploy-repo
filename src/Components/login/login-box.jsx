import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginBox() {
  return (
    <div className="bg-white ml-[20%] w-[60%] w rounded-md py-8 px-4 my-8">
      <div className="font-bold text-xl">We're glad to see you again</div>
      <div className="mt-4 mb-8">
        Don't have an account?{" "}
        <a href="#" className="text-blue-300">
          Sign up!
        </a>{" "}
      </div>

      <div className="my-4">
        <div className="font-medium mb-2">Email</div>
        <input
          type="text"
          placeholder="aite58@gmail.com"
          className="border border-gray-light outline-none rounded text-sm w-full py-3 px-3 leading-tight focus:outline-none"
        />
      </div>
      <div className="my-4">
        <div className="font-medium mb-2">Password</div>
        <input
          type="text"
          placeholder="********"
          className="border border-gray-light outline-none rounded text-sm w-full py-3 px-3 leading-tight focus:outline-none"
        />
      </div>
      <div className="flex justify-between my-2 items-center">
        <div className="flex">
          <input type="checkbox" className="mr-2" />
          <div className="">Remember me</div>
        </div>
        <a href="#" className="text-blue-300">
          Lost you password?
        </a>
      </div>
      <button
        type="submit"
        className={`bg-green-500 text-white w-full rounded text-white-primary text-sm py-3 font-medium bg-purple-primary grid place-items-center cursor-pointer 
        ${
          ""
          //   loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        }
        `}
      >
        Login
      </button>
      <div className="my-8 flex items-center justify-between">
        <div className="w-[45%] h-[2px] bg-gray-200"></div>
        <div>OR</div>
        <div className="w-[45%] h-[2px] bg-gray-200"></div>
      </div>
      <div className="flex justify-between">
        <div className="bg-white border-2 border-blue-300 text-white w-[30%] rounded text-blue-300 text-xs py-3 font-medium bg-purple-primary grid place-items-center cursor-pointer">
          Continue Facebook
        </div>
        <div className="flex bg-white border-2 border-red-500 text-white w-[30%] rounded text-red-500 text-xs py-3 font-medium bg-purple-primary grid place-items-center cursor-pointer">
          <FontAwesomeIcon icon="fa-facebook" className="text-red-700" />
          Continue Google
        </div>
        <div className="bg-white border-2 border-gray-700 text-white w-[30%] rounded text-black text-xs py-3 font-medium bg-purple-primary grid place-items-center cursor-pointer">
          Continue Apple
        </div>
      </div>
    </div>
  );
}
