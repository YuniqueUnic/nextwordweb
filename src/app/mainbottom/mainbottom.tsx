"use client";

import React from "react";

import "./index.css";
import ULearnSegment from "@/components/ULearnSegment";
import { MainContent } from "@/const/UConst";
import { GiphyGIF } from "@/const/UImage";
import Image from "next/image";

const MainBottom = () => {
  return (
    <div className="container flex flex-row">
      <div className="card card-side">
        <div className="card_top card-body">
          <div className="card-title">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-2/3 flex-1">
                <Image
                  src={GiphyGIF.src}
                  alt="Context Image"
                  width={GiphyGIF.width}
                  height={GiphyGIF.height}
                />
              </div>
              <div className="md:right_content w-full md:w-1/3 flex-auto">
                <ULearnSegment
                  word={MainContent.zh.word}
                  pronunciation={MainContent.zh.pronunciation}
                  sentence={MainContent.zh.sentence}
                />
              </div>
            </div>
          </div>
          <div className="paragraphs mt-1">
            <span className="font-serif">{MainContent.zh.paragraphs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;
