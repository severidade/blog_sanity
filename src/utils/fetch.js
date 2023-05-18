import sanityClient from "../cliente";

const POST_TYPE = "post";
const PROJECT_TYPE = "project";
const VIDEO_TYPE = "videos";

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
  publishedAt,
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

const DATA_FIELDS = `
  documents[]->{
    _id,
    title,
    url,
    pdfFile,
    classification
  }
`;

const VIDEO_FIELDS = `
  title,
  _id,
  video,
  publishedAt,
  body,
`;

// const VIDEO_FIELDS = `
//   title,
//   _id,
//   video,
//   publishedAt,
//   body,
//   ${DATA_FIELDS}
// `;

async function fetchData(query, errorMessage) {
  try {
    const data = await sanityClient.fetch(query);
    return data;
  } catch (error) {
    console.error(errorMessage, error);
    throw error;
  }
}

export async function fetchPosts() {
  const query = `*[_type == "${POST_TYPE}"] | order(publishedAt desc) {${POST_FIELDS}}`;
  const errorMessage = 'Ocorreu um erro ao buscar os posts:';
  return fetchData(query, errorMessage);
}

export async function fetchSinglePost(slug) {
  const query = `*[slug.current == "${slug}"] {${SINGLE_POST_FIELDS}}`;
  const errorMessage = 'Ocorreu um erro ao buscar o post:';
  return fetchData(query, errorMessage);
}

export async function fetchProjects() {
  const query = `*[_type == "${PROJECT_TYPE}"] | order(publishedAt desc) {${PROJECT_FIELDS}}`;
  const errorMessage = 'Ocorreu um erro ao buscar os projetos:';
  return fetchData(query, errorMessage);
}

export async function fetchPreviousPost(publishedAt) {
  const query = `*[_type == "${POST_TYPE}" && publishedAt < "${publishedAt}"] | order(publishedAt desc)[0] {${POST_FIELDS}}`;
  const errorMessage = 'Ocorreu um erro ao buscar o post anterior:';
  return fetchData(query, errorMessage);
}

export async function fetchNextPost(publishedAt) {
  const query = `*[_type == "${POST_TYPE}" && publishedAt > "${publishedAt}"] | order(publishedAt asc)[0] {${POST_FIELDS}}`;
  const errorMessage = 'Ocorreu um erro ao buscar o próximo post:';
  return fetchData(query, errorMessage);
}

export async function fetchVideos() {
  const query = `*[_type == "${VIDEO_TYPE}"] | order(publishedAt asc) {${VIDEO_FIELDS}}`;
  const errorMessage = 'Ocorreu um erro ao buscar os vídeos:';
  return fetchData(query, errorMessage);
}