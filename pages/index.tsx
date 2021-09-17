import { Layout } from '@components/common'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className='relative flex-shrink-0 w-full h-[462px]'>
        <Image
          src='/carousel/carousel-1.jpg'
          alt='Carousel 1'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute inset-x-0 bottom-8 md:bottom-[31px] flex justify-center space-x-4 z-50'>
          {[...Array(3)].map((e, i) => (
            <div
              className='w-[30px] h-[30px] bg-primary odd:bg-white rounded-sm shadow'
              key={i}
            />
          ))}
        </div>
      </div>
      <div className='max-w-7xl mx-auto pl-[1.9375rem] pr-[1.875rem] xl:pl-[4.6875rem] xl:pr-[4.0625rem] py-[21px]'>
        <h1 className='font-playfair text-primary text-[2.125rem] leading-[2.875rem]'>
          We do YAY things
        </h1>
        <p className='mt-3.5 text-secondary leading-6'>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>
      </div>
      <h1>Home page</h1>
    </>
  )
}

export default Home

Home.Layout = Layout
