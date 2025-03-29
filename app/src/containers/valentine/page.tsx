"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ApologyState {
  text: string;
  image: string;
  alt: string;
}

const noTextsArr: ApologyState[] = [
  { text: "No", image: "/valentine/sorry1.gif", alt: "sad bear | initial" },
  { text: "Please forgive me", image: "/valentine/sorry2.gif", alt: "sad bear | pleading" },
  { text: "I'm really sorry", image: "/valentine/sorry3.gif", alt: "sad bear | sorry" },
  { text: "I know I messed up", image: "/valentine/sorry4.gif", alt: "sad bear | regret" },
  { text: "I promise to do better", image: "/valentine/sorry5.gif", alt: "sad bear | promise" },
  { text: "I'll make it up to you", image: "/valentine/sorry6.gif", alt: "happy bear | making up" },
  { text: "I miss you", image: "/valentine/sorry7.gif", alt: "sad bear | missing" },
  { text: "I can't stop thinking about you", image: "/valentine/sorry8.gif", alt: "sad bear | thinking" },
  { text: "I'll give you space...", image: "/valentine/sorry9.gif", alt: "sad bear | space" },
  { text: "Just kidding, PLEASE FORGIVE ME", image: "/valentine/sorry10.gif", alt: "happy bear | pleading" },
  { text: "You're breaking my heart ;(", image: "/valentine/sorry11.gif", alt: "sad bear | heartbroken" },
  { text: "No", image: "/valentine/sorry12.gif", alt: "sad bear | final" },
];

enum Stages {
  stageNo = "stage-no",
  stageYes = "stage-yes",
  unhappy = "unhappy",
}

export default function Valentine(): React.ReactElement {
  const [stage, setStage] = useState<Stages>(Stages.stageNo);
  const [counter, setCounter] = useState<number>(0);

  const changeNoText = (): void => {
    setCounter((prevState: number) => {
      if (prevState < noTextsArr.length - 1) {
        return prevState + 1;
      } else {
        setStage(Stages.unhappy);
        return 0;
      }
    });
  };

  console.log(counter);

  return (
    <section className="valentine-box select-none">
      {stage === Stages.stageNo && (
        <>
          <div className="text-center">
            <Image
              className="mx-auto"
              src={noTextsArr[counter].image}
              alt={noTextsArr[counter].alt}
              width={250}
              height={250}
              unoptimized
              priority
            />
          </div>
          <div className="text-2xl mt-2 text-gray-900 text-center">
            Will you forgive me?
          </div>
          <div className="flex items-center justify-center mt-3 text-center">
            <button
              className="bg-green-500 text-white rounded me-2 py-1 px-2"
              style={{ fontSize: counter ? `${(counter + 1) * 15}px` : "18px" }}
              onClick={() => setStage(Stages.stageYes)}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white rounded ms-2 py-1 px-2 text-[18px]"
              onClick={changeNoText}
            >
              {noTextsArr[counter].text}
            </button>
          </div>
        </>
      )}
      {stage === Stages.stageYes && (
        <>
          <Image
            src="/valentine/sorry13.gif"
            alt="happy bear | forgiveness"
            width={250}
            height={250}
            unoptimized
            priority
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"Thank you! I promise to be better!"}
          </div>
        </>
      )}
      {stage === Stages.unhappy && (
        <>
          <Image
            src="/valentine/sorry1.gif"
            alt="sad bear | no forgiveness"
            width={250}
            height={250}
            unoptimized
            priority
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"I understand... I'll wait for you"}
          </div>
        </>
      )}
    </section>
  );
}
