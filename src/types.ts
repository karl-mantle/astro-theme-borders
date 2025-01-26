import type { HTMLAttributes } from 'astro/types';

export interface DefaultTypes {
  backgroundColor?: 'white' | 'black' | 'transparent' | 'transparent-dark' | 'light-grey' | 'dark-grey',
  bodyColor?: 'white' | 'black' | 'transparent' | 'transparent-dark' | 'light-grey' | 'dark-grey',
  buttonPrimary?: ButtonOptions,
  buttonSecondary?: ButtonOptions,
  class?: string | null | undefined
  date?: Date,
  dateOptions?: DateOptions,
  description?: string,
  heading?: string,
  headingOptions?: HeadingOptions,
  image?: any, // fix
  imageOptions?: ImageOptions,
  layoutOptions?: LayoutOptions
};

export interface ButtonOptions extends HTMLAttributes<'a'> {
  buttonStyle?: 'primary' | 'secondary' | 'link' | 'disabled',
  buttonText?: string,
  buttonTextClass?: string,
  buttonTextWrap?: boolean,
  icon?: string,
  iconAnimate?: boolean,
  iconReverse?: boolean,
  iconSize?: number,
  ariaLabel?: string
};

export interface DateOptions extends HTMLAttributes<'div'> {
  backgroundColor?: DefaultTypes['backgroundColor'],
  description?: DefaultTypes['description'],
  hideDescription?: boolean,
  showTime?: boolean
};

export interface HeadingOptions extends HTMLAttributes<'h1'> {
  backgroundColor?: DefaultTypes['backgroundColor'],
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
  subtitle?: string
};

export interface ImageOptions extends HTMLAttributes<'div'> {
  altText?: string,
  aspectRatio?: 'square' | 'video' | 'landscape' | 'portrait',
  imageMask?: 'none' | 'circle' | 'heart' | 'hexagon' | 'star' | 'triangle',
  objectFit?: 'none' | 'contain' | 'fill' | 'cover' | 'scale-down',
  padded?: boolean
};

interface LayoutOptions {
  columns?: number,
  fullWidth?: boolean
  hideHeader?: boolean,
  padded?: boolean,
  reverseColumns?: boolean
};

export type Terms = {
  name: string,
  slug: string,
  type: string
};