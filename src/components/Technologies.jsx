import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import html from "../assets/icons/html.png";
import tailwind from "../assets/icons/tailwind.png";
import mongo from "../assets/icons/mongo.png";
import express from "../assets/icons/express.svg";
import react from "../assets/icons/react.png";
import node from "../assets/icons/nodejs.png";
import java from "../assets/icons/java.png";
import spring from "../assets/icons/spring.png";
import next from "../assets/icons/next.svg";
import redis from "../assets/icons/redis.png";
import shadcn from "../assets/icons/shadcn.png";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={js} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={ts} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={html} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={tailwind} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={react} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={next} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={redis} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={shadcn} className="rounded-md size-16" />
        </div>
      </div>
      <div className="flex flex-wrap pt-10 items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={mongo} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={express} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={node} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={java} className="rounded-md size-16" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={spring} className="rounded-md size-16" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
