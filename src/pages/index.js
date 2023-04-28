import { Inter } from "next/font/google";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-[url(/bg.jpg)] bg-cover text-white px-20 py-12 ${inter.className} flex flex-col justify-start items-center min-h-screen min-w-screen`}
    >
      <h1 className="text-4xl mt-12">Prediction of</h1>
      <h1 className="text-5xl mt-5 font-semibold">Autism Spectrum Disorder</h1>
      <h1 className="text-4xl mt-7">using Artificial Intelligence</h1>

      <p className="font-semibold text-2xl mt-20">Get Dataset</p>

      <div className="flex gap-16 mt-14">
        <Link href="/toddler">
          <button className="bg-white px-5 text-black font-semibold py-3 rounded-md flex items-center texy-xl justify-center gap-5 hover:bg-opacity-60 transition duration-200">
            Toddler
            <BsArrowUpRight className="font-bold" />
          </button>
        </Link>

        <Link href="/child">
          <button className="bg-white px-5 text-black font-semibold py-3 rounded-md flex items-center texy-xl justify-center gap-5 hover:bg-opacity-60 transition duration-200">
            Child
            <BsArrowUpRight className="font-bold" />
          </button>
        </Link>

        <Link href="/adolescent">
          <button className="bg-white px-5 text-black font-semibold py-3 rounded-md flex items-center texy-xl justify-center gap-5 hover:bg-opacity-60 transition duration-200">
            Adolescent
            <BsArrowUpRight className="font-bold" />
          </button>
        </Link>

        <Link href="/adult">
          <button className="bg-white px-5 text-black font-semibold py-3 rounded-md flex items-center texy-xl justify-center gap-5 hover:bg-opacity-60 transition duration-200">
            Adult
            <BsArrowUpRight className="font-bold" />
          </button>
        </Link>
      </div>
    </main>
  );
}
