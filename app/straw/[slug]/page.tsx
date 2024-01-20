import { AddToBasket } from "@/app/components/Buttons";
import ImageGallery from "@/app/components/ImageGallery";
import { fullCloth } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Truck } from "lucide-react";


async function getData(slug: string) {
    const query = `*[_type == 'StrawElement' && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`;
      const data = await client.fetch(query);

      return data;
};

export const dynamic = "force-dynamic";

export default async function ProductPage({params}: {params: {slug: string}}) {

    const data: fullCloth = await getData(params.slug);

    return (
        <div className="bg-white ">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data?.images} />
                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                                {data.name}
                            </h2>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-800 md:text-2xl">{data.price} руб.</span>
                            </div>
                            <div className="mb-6 flex items-center gap-2 text-gray-500">
                                <Truck /> <span className="text-sm"> Условия доставки</span>
                            </div>
                            <div className="flex gap-2.5">
                                <AddToBasket stripe_id={data.price_id} currency="USD" description={data.description} image={data.images[0]} price={data.price} name={data.name} />
                            </div>
                            <p className="mt-12 text-base text-gray-500 tracking-wide">
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}