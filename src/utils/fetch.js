import sanityClient from "../cliente";

const POST_TYPE = "post";
const PROJECT_TYPE = "project";

const MAIN_IMAGE_FIELDS = `
  mainImage{
    asset->{
      _id,
      url,
    },
    alt
  }
`;

const THUMBNAIL_IMAGE_FIELDS = `
  thumbnailImage {
    asset -> {
      _id,
      url
    },
    alt
  }
`;

const POST_FIELDS = `
  title,
  sub_title,
  slug,
  publishedAt,
  ${MAIN_IMAGE_FIELDS},
  ${THUMBNAIL_IMAGE_FIELDS}
`;

const SINGLE_POST_FIELDS = `
  title,
  sub_title,
  _id,
  slug,
  body,
  ${MAIN_IMAGE_FIELDS},
  "name": author -> name,
  "authorImage": author -> image
`;

const PROJECT_FIELDS = `
  title,
  data,
  place,
  description,
  ${MAIN_IMAGE_FIELDS},
  projectType,
  link,
  tags
`;

export async function fetchPosts() {
  const query = `*[_type == "${POST_TYPE}"] | order(publishedAt desc) {${POST_FIELDS}}`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function fetchSinglePost(slug) {
  const query = `*[slug.current == "${slug}"] {${SINGLE_POST_FIELDS}}`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function fetchProjects() {
  const query = `*[_type == "${PROJECT_TYPE}"] | order(publishedAt desc) {${PROJECT_FIELDS}}`;
  const data = await sanityClient.fetch(query);
  return data;
}

