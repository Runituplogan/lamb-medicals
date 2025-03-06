import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/sanity/sanity";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
