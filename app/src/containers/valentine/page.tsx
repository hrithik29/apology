"use client";

import React, { useState } from "react";
import Image from "next/image";

const noTextsArr: string[] = [
  "No",
  "Please forgive me",
  "I'm really sorry",
  "I know I messed up",
  "I promise to do better",
  "I'll make it up to you",
  "I miss you",
  "I can't stop thinking about you",
  "I'll give you space...",
  "Just kidding, PLEASE FORGIVE ME",
  "You're breaking my heart ;(",
  "No",
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
              src="/valentine/valentine-bear.gif"
              alt="sorry bear | apology"
              width={250}
              height={250}
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
              {noTextsArr[counter]}
            </button>
          </div>
        </>
      )}
      {stage === Stages.stageYes && (
        <>
          <Image
            src="/valentine/bear-kiss-bear-kisses.gif"
            alt="happy bear | forgiveness"
            width={250}
            height={250}
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"Thank you! I promise to be better!"}
          </div>
        </>
      )}
      {stage === Stages.unhappy && (
        <>
          <Image
            src="/valentine/unhappy-bear.gif"
            alt="sad bear | no forgiveness"
            width={250}
            height={250}
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"I understand... I'll wait for you"}
          </div>
        </>
      )}
    </section>
  );
}
