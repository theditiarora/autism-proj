import { useState, useEffect } from "react";
import Image from "next/image";
import AdultGraph from "../../public/resources/adultgraph.png";
import PositiveGraph from "../../public/resources/adult-positive.png";
import NegativeGraph from "../../public/resources/adult-negative.png";
import Excel from "../../public/resources/excel.png";
import Loader from "@/Components/Loader";

export default function adult() {
  const [Loading, setLoading] = useState(true);
  const [positiveGraph, setPositiveGraph] = useState(false);
  const [negativeGraph, setNegativeGraph] = useState(false);
  const [negativeVisible, setNegativeVisible] = useState(true);
  const [positiveVisible, setPositiveVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

  return (
    <div className="bg-[url(/bg.jpg)] bg-cover text-white px-20 py-12 min-h-[100vh]">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-2xl font-semibold">Adult</h1>
        <div className="flex gap-10">
          <button
            onClick={() => {
              setPositiveGraph(true);
              setNegativeGraph(false);
              setNegativeVisible(false);
            }}
            className={`${
              positiveVisible === false
                ? "cursor-none bg-opacity-40"
                : "hover:bg-opacity-60"
            } bg-white px-5 text-black font-semibold py-3 rounded-md text-xl gap-5 transition duration-200 `}
          >
            Positive
          </button>

          <button
            onClick={() => {
              setPositiveGraph(false);
              setNegativeGraph(true);
              setPositiveVisible(false);
            }}
            className={`${
              negativeVisible === false
                ? "cursor-none bg-opacity-40"
                : "hover:bg-opacity-60"
            } bg-white px-5 text-black font-semibold py-3 rounded-md text-xl gap-5 transition duration-200 `}
          >
            Negative
          </button>
        </div>

        <div className={`p-5 inline-block mt-10`}>
          {positiveGraph &&
            (Loading ? (
              <Loader />
            ) : (
              <Image
                width="500"
                height="500"
                src={PositiveGraph}
                alt={"positive graph"}
              />
            ))}

          {negativeGraph &&
            (Loading ? (
              <Loader />
            ) : (
              <Image
                width="500"
                height="500"
                src={NegativeGraph}
                alt={"negative graph"}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
