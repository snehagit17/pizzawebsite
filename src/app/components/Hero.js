import image from "next/image";
import { Icons } from "next/dist/lib/metadata/types/metadata-types";
import Right from "./icons/Right";
export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-3xl font-bold ">
          Everything
          <br /> is better
          <br /> with a&nbsp;
          <span className="text-blue-500">Pizza</span>
        </h1>
        <p className="my-6 font-medium text-gray-600 text-sm">
          Pizza is the missing piece that makes every day complete , a simple
          yet delicious joy in life
        </p>
        <div className="flex gap-4">
          <button className=" bg-green-500 rounded-full  flex items-center gap-2 text-white px-4 py-1.5 ">
            Order Now
            <Right />
          </button>
          <button className="flex items-center gap-2 py-2  font-semibold text-gray-700">
            Learn More
            <Right />
          </button>
        </div>
      </div>

      <div className=" relative flex ml-auto">
        <img
          src={"/pizza2.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
