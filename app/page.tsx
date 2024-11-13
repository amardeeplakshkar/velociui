import PreviewComponent from '@/components/core/preview-component';
import Header from '@/components/website/header';
import HeroSec from '@/components/website/hero-sec';
import ConfettiDemo from '@/registry/components/confetti/confetti-prev';
import GlobeDemo from '@/registry/components/globe/globe';
import HyperTextDemo from '@/registry/components/hyper-text/hyper-text';
import MarqueeDemo from '@/registry/components/marquee/marquee';
import MotionNumberDemo from '@/registry/components/motion-number/motion-number';
import OrbitingCirclesDemo from '@/registry/components/orbitingcircles/orbitingcircles';
import MotionNumber from 'motion-number';

export default function Home() {
  return (
    <>
      <div className='z-50 fixed'>
        <Header />
      </div>
      <div className='relative'>
        <HeroSec />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
  <div className="md:col-span-2 flex justify-center items-center">
    <PreviewComponent>
      <MarqueeDemo />
    </PreviewComponent>
  </div>
  <div className="md:col-start-3 flex justify-center items-center w-full">
    <PreviewComponent>
      <OrbitingCirclesDemo />
    </PreviewComponent>
  </div>
  <div className="md:row-start-2 flex justify-center items-center">
    <PreviewComponent>
      <ConfettiDemo />
    </PreviewComponent>
  </div>
  <div className="md:col-span-2 md:row-start-2 flex flex-col justify-center items-center px-2">
    <PreviewComponent>
      <MotionNumberDemo />
    </PreviewComponent>
    <PreviewComponent>
      <HyperTextDemo />
    </PreviewComponent>
  </div>
</div>

    </>
  );
}
