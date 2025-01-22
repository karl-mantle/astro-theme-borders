import type { HTMLAttributes } from 'astro/types';

export interface defaultTypes {
  themeColors?: 'white' | 'black' | 'transparent' | 'transparent-dark' | 'light-grey' | 'dark-grey',
  class?: string,
  title?: string,
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
  subtitle?: string,
  description?: string,
  date?: Date,
  dateDescription?: string,
  image?: any, // fix it lol
  alt?: string
};

export interface ButtonProps extends HTMLAttributes<'a'> {
  buttonStyle: 'primary' | 'secondary' | 'link' | 'disabled',
  backgroundColor?: defaultTypes['themeColors'],
  text: string,
  textClass?: string,
  icon?: string,
  iconSize?: number,
  iconReverse?: boolean,
  iconRotate?: boolean,
  ariaLabel?: string
};

export interface CardProps extends HTMLAttributes<'li'> {
  title: defaultTypes['title'],
  titleTag: 'h3' | 'h4' | 'h5',
  subtitle?: defaultTypes['subtitle'],
  description?: defaultTypes['description'],
  image?: defaultTypes['image'],
  alt?: defaultTypes['alt'],
  primaryButtonProps?: ButtonProps,
  secondaryButtonProps?: ButtonProps,
  backgroundColor?: defaultTypes['themeColors'],
  bodyColor?: defaultTypes['themeColors'],
};

export interface PartialProps extends HTMLAttributes<'div'> {
  title?: defaultTypes['title'],
  titleTag?: defaultTypes['titleTag']
  subtitle?: defaultTypes['subtitle'],
  description?: defaultTypes['description'],
  date?: defaultTypes['date'],
  dateDescription?: defaultTypes['dateDescription'],
  image?: defaultTypes['image'],
  alt?: defaultTypes['alt'],
  primaryButtonProps?: ButtonProps,
  secondaryButtonProps?: ButtonProps,
  backgroundColor?: defaultTypes['themeColors'],
  bodyColor?: defaultTypes['themeColors'],
  padded?: boolean
};

export interface SectionProps extends HTMLAttributes<'section'> {
  title?: defaultTypes['title'],
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4',
  subtitle?: defaultTypes['subtitle'],
  description?: defaultTypes['description'],
  image?: defaultTypes['image'],
  alt?: defaultTypes['alt'],
  primaryButtonProps?: ButtonProps,
  secondaryButtonProps?: ButtonProps,
  backgroundColor?: defaultTypes['themeColors'],
  bodyColor?: defaultTypes['themeColors'],
  padded?: boolean,
  reverseColumns?: boolean
};

export type Terms = {
  name: string,
  slug: string,
  type: string,
};