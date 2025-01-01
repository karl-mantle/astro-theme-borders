import type { HTMLAttributes } from 'astro/types';

export interface ButtonProps extends HTMLAttributes<'a'> {
  buttonStyle: 'primary' | 'link' | 'disabled',
  text: string,
  textClass?: string,
  icon?: string,
  iconSize?: number,
  iconReverse?: boolean,
  iconRotate?: boolean
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

export interface ComponentProps {
  subtitle?: string,
  title?: string,
  description?: string,
  image?: any, // fix me
  alt?: string,
  primaryButtonProps?: ButtonProps,
  secondaryButtonProps?: ButtonProps
  class?: string,
  date?: Date
};

export interface MenuItemType { 
  id: string,
  parentId: string | null,
  href: string,
  label: string,
  children: MenuItemType[]
};

export interface MenuDataType {
  menuItems: MenuItemType[]
};