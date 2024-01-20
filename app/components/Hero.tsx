import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";


export default async function Hero() {

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      
      <div className="mb-8 flex flex-wrap justify-between md:mb-16 ">
        <div className=" mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <video
                poster="main-bg-video"
                autoPlay
                muted
                loop
                src="https://hxqtcynieepxbgczszuy.supabase.co/storage/v1/object/public/klu-daro-workspace/Strawberry%20Fields.mp4?t=2024-01-20T01%3A21%3A18.619Z"
                className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
          />
          <h1 className="mb-4 text-4xl -z-10 font-bold  lg:text-black/90 text-white sm:text-5xl md:mb-8 md:text-6xl">
            Сади рассаду - клубника даром.
          </h1>
          <p className="max-w-md z-10 leading-relaxed lg:text-black/90 text-gray-100 xl:text-lg">
          Лучшая рассада клубники для Москвы и всей России из питомников Коломны
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative border left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 ">
            <Image
              priority
              src="https://hxqtcynieepxbgczszuy.supabase.co/storage/v1/object/public/klu-daro-workspace/mb-left.jpg?t=2024-01-20T01%3A51%3A19.257Z"
              alt="foto 1"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className=" overflow-hidden rounded-lg border bg-gray-100 shadow-lg ">
            <Image
              priority
              src="https://hxqtcynieepxbgczszuy.supabase.co/storage/v1/object/public/klu-daro-workspace/mb-right.jpg?t=2024-01-20T01%3A51%3A25.892Z"
              alt="foto 2"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 md:gap-8 md:flex-row">
        <div className="flex h-12 w-72 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/nsd"
            className="flex px-2 w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            НСД
          </Link>
          <Link
            href="/early"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Ранняя
          </Link>
          <Link
            href="/latest"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Поздняя
          </Link>
        </div>
      </div>
    </section>
  );
}
