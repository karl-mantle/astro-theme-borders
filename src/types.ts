import type { HTMLAttributes } from 'astro/types';

export interface ButtonProps extends HTMLAttributes<'a'> {
  buttonStyle: 'primary' | 'link' | 'disabled',
  text: string,
  textClass?: string,
  icon?: string,
  iconSize?: number,
  iconReverse?: boolean,
  iconRotate?: boolean,
  ariaLabel?: string
};

export interface CardProps extends HTMLAttributes<'li'> {
  subtitle?: string,
  title: string,
  titleTag: 'h3' | 'h4' | 'h5',
  description?: string,
  image?: any, // fix me
  alt?: string,
  primaryButtonProps?: ButtonProps,
  secondaryButtonProps?: ButtonProps
  class?: string,
};

export interface PartialProps extends HTMLAttributes<'div'> {
  subtitle?: string,
  title?: string,
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  description?: string,
  image?: any, // fix me
  alt?: string,
  primaryButtonProps?: ButtonProps,
  secondaryButtonProps?: ButtonProps
  class?: string,
  date?: Date
};

export interface SectionProps extends HTMLAttributes<'section'> {
  subtitle?: string,
  title?: string,
  titleTag?: 'h1' | 'h2' | 'h3',
  description?: string,
  image?: any, // fix me
  alt?: string,
  primaryButtonProps?: ButtonProps,
  secondaryButtonProps?: ButtonProps
};

export type Terms = {
  name: string,
  slug: string,
  type: string,
};