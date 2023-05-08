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

export async function fetchSinglePost(slug) {
  const data = await sanityClient.fetch(`*[slug.current == "${slug}"]{
    title,
    sub_title,
    _id,
    slug,
    mainImage{
      asset->{
        _id,
        url,
      }
    },
    body,
    "name": author->name,
    "authorImage": author->image
  }`);
  return data;
}

export async function fetchProjects() {
  const data = await sanityClient.fetch(
  `*[_type == "project"] | order(publishedAt desc) {
    title,
    data,
    place,
    description,
    projectType,
    link,
    tags
  }`);
  return data;
}

