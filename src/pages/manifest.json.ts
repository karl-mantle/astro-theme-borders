import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_SHORT_TITLE } from '../consts.ts';
import faviconSrc from '../../public/favicon.png';

const faviconPngSizes = [96, 192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: faviconSrc,
        width: size,
        height: size,
        format: 'png'
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`
      };
    })
  );

  const manifest = {
    name: `${SITE_TITLE}`,
    description: `${SITE_DESCRIPTION}`,
    short_name: `${SITE_SHORT_TITLE}`,
    start_url: '/',
    display: 'standalone',
    id: 'some-unique-id',
    background_color: '#171717',
    theme_color: '#d4d4d4',
    icons,
  };

  return new Response(JSON.stringify(manifest));

};