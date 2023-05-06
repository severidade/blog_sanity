import sanityClient from "../cliente";

export async function fetchPosts() {
  const data = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title,
    sub_title,
    slug,
    mainImage{
      asset-> {
        _id,
        url
      },
      alt
    },
    thumbnailImage{
      asset-> {
        _id,
        url
      },
      alt
    },
    publishedAt
  }`);
  return data;
}
