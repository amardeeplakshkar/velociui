import Header from '@/components/website/header';
import HeroSec from '@/components/website/hero-sec';

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative'>
        <HeroSec />
      </main> 
    </>
  );
}
