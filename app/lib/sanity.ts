import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '8hhdj9eu',
    dataset: 'production',
    apiVersion: '2024-01-04',
    useCdn: true
});

const builder = ImageUrlBuilder(client);

export function urlFor(source:any) {
    return builder.image(source);
}