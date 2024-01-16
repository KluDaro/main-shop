import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16 ">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Топ шмотки по топовым ценам
          </h1>
          <p className="max-w-md  leading-relaxed text-gray-500 xl:text-lg">
            Мне нужна была практика интернет магазина, и я решил создать сайт с
            вещами из моего гардероба. <br /> Введен функционал собрания луков с
            подсчетом их общей цены. Это все сделано как демонстрация навыков.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 ">
            <Image
              priority
              src={urlFor(data.image1).url()}
              alt="foto 1"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
            <Image
              priority
              src={urlFor(data.image2).url()}
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
            href="/top"
            className="flex px-2 w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Толстовки
          </Link>
          <Link
            href="/bot"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Штаны
          </Link>
          <Link
            href="/shoes"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Обувь
          </Link>
        </div>
        <div className="flex justify-between items-center h-12 w-48 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/street"
            className="flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Куртки
          </Link>
          <Link
            href="/footb"
            className="flex w-1/2 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Футболки
          </Link>
        </div>
      </div>
    </section>
  );
}
