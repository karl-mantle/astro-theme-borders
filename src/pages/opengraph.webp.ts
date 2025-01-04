import type { APIRoute } from 'astro';
import { SITE_OG_IMAGE } from '../consts';
import sharp from 'sharp';
import fs from 'fs';
import path from 'node:path';

const OpenGraphPath = path.resolve(SITE_OG_IMAGE.src);

export const GET: APIRoute = async () => {

  const imageBuffer = fs.readFileSync(OpenGraphPath);
  const ogImageBuffer = await sharp(imageBuffer).resize(1200, 630).toFormat('webp').toBuffer();

  return new Response(ogImageBuffer, {
    headers: { 'Content-Type': 'image/webp' }
  });
};