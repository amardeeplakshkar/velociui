'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import {
  Github,
  MonitorSmartphone,
  Moon,
  MoonIcon,
  Sun,
  SunIcon,
  X,
} from 'lucide-react';
import { SearchDialog } from './searchbar';
import Image from 'next/image';
import Topnav from './Topnav';
// import MobileHeader from './moibile-header'

function Header() {
  const { setTheme } = useTheme();

  return (
    <>
      <header className=' fixed left-0 top-0 z-10 w-full border-b-[1px] border-border dark:bg-black/40 bg-white/40 px-2 py-2 backdrop-blur-lg'>
        <div className='mx-auto flex items-center justify-between gap-2 px-2 2xl:container'>
          <Link href='/' className=''>
            <div className='relative gap-2 flex items-center justify-center'>
              <Image className='invert dark:invert-0 ' src="https://apricot-selected-dog-88.mypinata.cloud/ipfs/QmXGNEi1DgUwvEi621LPUfYUEQBLPXsNPmb8WhA4DhyEBe" height={35} width={35} alt='logo' />
             <h2 className='text-2xl font-bold font-[Bloxat] mt-[.5rem] max-sm:hidden'>
              VELOCIUI
             </h2>
            </div>
          </Link>

          {/* <MobileHeader /> */}
          <div className='flex gap-2 '>
            <SearchDialog classname='w-full ' />
            <button
              className={`sm:flex hidden flex-shrink-0 items-center space-x-2 group  px-2 rounded-md bg-primary text-primary-foreground border`}
              onClick={() =>
                window.open(
                  `https://github.com/amardeeplakshkar/velociui`,
                  '_blank'
                )
              }
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-star group-hover:fill-yellow-500 group-hover:stroke-yellow-500 transition-colors duration-300 '
              >
                <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
              </svg>
              <span className='font-medium'>Star on github</span>
            </button>
            <a
              target='_blank'
              href='https://github.com/amardeeplakshkar/velociui'
              className='border w-10 flex-shrink-0  place-content-center rounded-md sm:hidden grid bg-primary text-primary-foreground'
            >
              <Github />
            </a>

            <a
              target='_blank'
              href='https://x.com/amardeep.devs'
              className='border flex-shrink-0 bg-primary  text-primary-foreground text-2xl w-12   grid  place-content-center max-md:hidden  rounded-md'
            >
              <svg
                width='120'
                height='109'
                viewBox='0 0 120 109'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className=' fill-primary-foreground w-6 h-5'
              >
                <path d='M94.5068 0H112.907L72.7076 46.172L120 109H82.9692L53.9674 70.8942L20.7818 109H2.3693L45.3666 59.6147L0 0H37.9685L64.1848 34.8292L94.5068 0ZM88.0484 97.9318H98.2448L32.4288 10.4872H21.4882L88.0484 97.9318Z' />
              </svg>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='relative flex-shrink-0 grid w-12 place-content-center rounded-md border border-input bg-primary-foreground'>
                  <SunIcon className='block h-[1.2rem] w-[1.2rem] transition-all dark:hidden' />
                  <MoonIcon className='hidden h-[1.2rem] w-[1.2rem] transition-all dark:block' />
                  <span className='sr-only'>Toggle theme</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className='mr-2 h-4 w-4' /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className='mr-2 h-4 w-4' /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <MonitorSmartphone className='mr-2 h-4 w-4' /> System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Topnav/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
