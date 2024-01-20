import Image from "next/image";
import Link from "next/link";
import { simplProd } from "../interface";
import { client } from "../lib/sanity";

async function getData(category: string){

    const query = `*[_type == 'StrawElement' && category->name == "${category}"] {
        _id,
          "imageURL": images[0].asset->url,
            price,
          name,
          "slug": slug.current,
          "categoryName": category->name
      }`;

      const data = await client.fetch(query);

      return data;
};

export const dynamic = "force-dynamic";

export default async function CategoryPage({params} : {params: {category: string}}) {

    const data: simplProd[] = await getData(params.category);

    const findH2 = (cat: string) => {
        switch(cat) {
            case 'nsd': return "НСД";
            case 'early': return "Ранняя";
            case 'latest': return "Поздняя";
            default: return `Ошибки 404. Страница не найдена`;
        }
    };

    let pageH2 =  findH2(params.category);

    return (
        <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">

          <h2 className="text-xl md:text-2xl font-bold">{pageH2}</h2>

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