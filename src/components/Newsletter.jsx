import React from "react";

export default function Newsletter() {
  return (
    <section className="mx-auto px-2 bg-primary/25 flex flex-col items-center justify-center text-center h-[22rem] gap-6">
      <h2 className="font-lobster text-6xl">Deliciousness to your inbox</h2>
      <p className="text-lg leading-relaxed max-w-[60ch]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        consequatur.
      </p>
      <form className="join">
        <input
          className="input input-bordered join-item w-[20rem]"
          placeholder="Example@email.com"
        />
        <button className="btn join-item btn-primary">Subscribe</button>
      </form>
    </section>
  );
}
