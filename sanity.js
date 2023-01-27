import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '2f6r62q3',
  dataset: 'production',
  useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
