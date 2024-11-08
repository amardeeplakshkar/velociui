import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce(
  func: (...args: any[]) => any,
  wait: number,
  immediate: boolean = false
) {
  let timeout: number | undefined;

  return function executedFunction(this: any, ...args: any[]) {
    const context: any = this;

    const later = () => {
      timeout = undefined;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow: boolean = immediate && !timeout;

    clearTimeout(timeout);

    timeout = window.setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false;

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args);
      shouldWait = true;
      setTimeout(() => (shouldWait = false), wait);
    }
  };
}

export const siteConfig = {
  name: 'VelociUI',
  url: 'https://velociui.vercel.app/',
  ogImage: 'https://velociui.vercel.app/og.png',
  description:
    'VelociUI is a high-performance, customizable React UI component library designed for speed and ease of use. With a growing collection of sleek and accessible components, VelociUI enables developers to quickly build modern interfaces while maintaining full control over styling and functionality. Whether you’re building a new project from scratch or enhancing an existing app, VelociUI provides powerful tools to accelerate your development workflow.',
  links: {
    twitter: 'https://twitter.com/amardeep.devs',
    linkedin: 'https://in.linkedin.com/in/amardeep-lakshkar-24a339244',
    github: 'https://github.com/amardeeplakshkar',
  },
};

export type SiteConfig = typeof siteConfig;
