# VelociUI - React UI Component Library 🚀

<img alt="VelociUI - Design That Really Makes Sense" src="https://velociui.vercel.app/og.png" width="100%">

## Folder Structure

```
├── .eslintrc.json
├── .example.env
├── .gitignore
├── README.md
├── app
|     ├── (docs-page)
|     |     ├── components
|     |     |     ├── [...slug]
|     |     |     |     ├── page.tsx
|     |     |     ├── page.tsx
|     |     ├── get-started
|     |     |     ├── page.mdx
|     |     ├── layout.tsx
|     ├── favicon.ico
|     ├── globals.css
|     ├── layout.tsx
|     ├── live-components
|     |     ├── [componentName]
|     |     |     ├── error.tsx
|     |     |     ├── loading.tsx
|     |     |     ├── page.tsx
|     ├── page.tsx
├── assets
|     ├── index.ts
|     ├── preview
|     |     ├── buttons.svg
|     |     ├── card.svg
|     |     ├── clip-path.svg
|     |     ├── horizontal-scrolling.svg
|     |     ├── index.tsx
|     |     ├── motion-number.svg
|     ├── preview_bg.png
├── components
|     ├── core
|     |     ├── blur-vignette.tsx
|     |     ├── cursor-follow-text.tsx
|     |     ├── drawer
|     |     |     ├── vaul-main.tsx
|     |     ├── numbersuffle.tsx
|     ├── labs
|     |     ├── preview-tab.tsx
|     ├── website
|     |     ├── code-components
|     |     |     ├── code-block.tsx
|     |     |     ├── component-block.tsx
|     |     |     ├── component-code-preview.tsx
|     |     |     ├── component-preview.tsx
|     |     |     ├── copy-button.tsx
|     |     |     ├── copy-npm-button.tsx
|     |     |     ├── drawer-code-preview.tsx
|     |     |     ├── iframe-component-preview.tsx
|     |     |     ├── iframe-tab-codepreview.tsx
|     |     |     ├── pagination.tsx
|     |     |     ├── pre-code.tsx
|     |     |     ├── pre-coded.tsx
|     |     |     ├── tab-codepreview.tsx
|     |     ├── constant.tsx
|     |     ├── dropdown-menu.tsx
|     |     ├── header.tsx
|     |     ├── hero-sec.tsx
|     |     ├── icons
|     |     |     ├── github.tsx
|     |     |     ├── x.tsx
|     |     ├── searchbar.tsx
|     |     ├── sidebar.tsx
|     |     ├── tableof-compoents.tsx
|     |     ├── theme-provider.tsx
|     |     ├── theme-switch.tsx
|     |     ├── ui
|     |     |     ├── button.tsx
|     |     |     ├── dialog.tsx
|     |     |     ├── drawer.tsx
|     |     |     ├── dropdown.tsx
|     |     |     ├── navigation-menu.tsx
|     |     |     ├── scroll-area.tsx
|     |     |     ├── tabs.tsx
├── configs
|     ├── docs.json
|     ├── docs.ts
├── content
|     ├── components
|     |     ├── blur-vignette.mdx
|     |     ├── buttons.mdx
|     |     ├── clip-path.mdx
|     |     ├── footers.mdx
|     |     ├── horizontal-scroll.mdx
|     |     ├── motion-number.mdx
|     |     ├── product-cards.mdx
├── hooks
|     ├── use-media-query.tsx
|     ├── useClickOutside.tsx
|     ├── useClipBoarard.tsx
|     ├── useZustStore.tsx
├── lib
|     ├── code.ts
|     ├── docs.tsx
|     ├── progressbar.tsx
|     ├── toc.ts
|     ├── utils.ts
├── mdx-components.tsx
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── prettier.config.js
├── public
|     ├── og.jpg
├── registry
|     ├── components
|     |     ├── blurvignette
|     |     |     ├── blurvignettecard.tsx
|     |     |     ├── blurvignetteimg.tsx
|     |     |     ├── blurvignettevideo.tsx
|     |     ├── button
|     |     |     ├── btn-bg-shine.tsx
|     |     |     ├── btn-bg-spotlight.tsx
|     |     |     ├── btn-hover-active.tsx
|     |     |     ├── btn-hover1.tsx
|     |     |     ├── btn-hover2.tsx
|     |     |     ├── creative-btn1.tsx
|     |     |     ├── creative-btn2.tsx
|     |     ├── card
|     |     |     ├── product-card1.tsx
|     |     |     ├── product-card2.tsx
|     |     ├── clip-path
|     |     |     ├── clip-path-creative.tsx
|     |     ├── footers
|     |     |     ├── footer1.tsx
|     |     |     ├── hover-footer.tsx
|     |     ├── motion-number
|     |     |     ├── motion-number-after.tsx
|     |     |     ├── motion-number-before.tsx
|     |     |     ├── motion-number-last.tsx
|     |     |     ├── motion-number-start.tsx
|     |     |     ├── motion-number.tsx
|     |     ├── scroll-animation
|     |     |     ├── framer-horizontal-scroll.tsx
├── tailwind.config.ts
├── tsconfig.json
```

Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

VelociUI is a collection of reusable components, each with a bunch of examples in different styles that can be used in various positions.
**I wondered how users would enjoy the journey of scrolling through a website if they didn't feel there was something special about it.**

## Installation

You must install `tailwindcss`. As most of our components use `framer-motion` install it too.

```bash
npm install framer-motion clsx tailwind-merge
```

Must Add it in the `utils.ts`:

```tsx utils.tsx
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

use this hooks for mediaQueries:

```tsx use-media-query.tsx
import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener('change', onChange);
    setValue(result.matches);

    return () => result.removeEventListener('change', onChange);
  }, [query]);

  return value;
}
```

## Motivation

The main reason for **creating this component was to help myself.** I've been creating web pages for the last couple of years and love building websites that are reactive and user-friendly. Some components are really reusable for different websites, and I have to search through files to find the code and it's really annoying. So, I thought, what if I create something where all of my animations or components will be in one place?

I gained hope and belief after seeing component libraries like https://ui.shadcn.com and https://ui.aceternity.com I want to give them credit for encouraging me to create free components library like this.

I want to thank https://magicui.design and https://x.com/jakubkrehel for what they have done. When I first completed some components, I realized that I needed to make text animations. Then I discovered **MagicUI** already have done it, and they had a bunch of components that I wanted to create myself. So, thanks again! 🔥


## 👤 Author (Amardeep Lakshkar)

- X: [@AmardeepDevs](https://x.com/amardeepdevs)
- LinkedIn: [@AmardeepLakshkar](https://in.linkedin.com/in/amardeep-lakshkar-24a339244)
