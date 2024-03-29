import Image from "next/image";
import Link from "next/link";
import { simplProd } from "../interface";
import { client } from "../lib/sanity";

async function getData(){

    const query = `*[_type == 'StrawElement'] | order(_createdAt desc) {
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

export default async function CategoryPage() {

    const data: simplProd[] = await getData();

    return (
        <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">

          <h2 className="text-xl md:text-2xl font-bold "> Все<span className=" text-primary ">Сорта</span>  </h2>

        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((clothEl) => (
            <div key={clothEl._id} className="group relative">
              <Link href={`/clothEl/${clothEl.slug}`}>
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
                  <h3 className="text-sm text-gray-700">
                      {clothEl.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{clothEl.price} руб.</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    )

}