import { ArrowRight } from "lucide-react";
import { simplProd } from "../interface";
import { client } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'StrawElement'][0...4] | order(_createdAt desc) {
  _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageURL": images[0].asset->url 
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplProd[] = await getData();

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Недавно добавленные
          </h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1">
            Все сорта...
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((clothEl) => (
            <div key={clothEl._id} className="group relative">
              <Link href={`/straw/${clothEl.slug}`}>
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={clothEl.imageURL}
                    alt={clothEl.name}
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <div className=" mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{clothEl.name}</h3>

                  </div>
                  <p className="text-sm font-medium text-gray-900">
                     {clothEl.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
