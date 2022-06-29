import React from "react";

export default function PreLoad() {
  return (
    <div className="bg-[url('/Preloadbg.png')] min-h-screen flex items-center justify-center">
      <article className="grid place-items-center space-y-4">
        <img src="/Preload.png" alt="logo" />
        <p className="lin text-lg font-semibold" data-aos="fade-down">
          Built By Bushra
        </p>
      </article>
    </div>
  );
}
