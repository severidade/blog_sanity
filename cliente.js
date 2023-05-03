import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '26f1x0iy',
  dataset: 'production',
  // as informações acima estão no arquivo sanity.cli.js
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})