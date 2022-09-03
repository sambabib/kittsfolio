import React from 'react';
import type { ReactElement } from 'react';
import { CgCopyright, CgArrowTopRight } from 'react-icons/cg';

const Connect = (): ReactElement => {
  return (
    <div className='container mx-auto my-20'>
      <section className=' px-8'>
        <div className=''>
          <h3 className='leading-relaxed text-xs uppercase font-light mb-8'>
            Connect with me.
          </h3>
        </div>

        <section>
          <div className='flex flex-col'>
            <span className='text-sm lg:text-xs font-semibold uppercase w-full hover:underline transition-all pb-2'>
              <a href='mailto:adekyte@hotmail.com'>adekyte@hotmail.com</a>
            </span>

            <span className='text-sm lg:text-xs font-semibold uppercase w-full hover:underline transition-all pb-2'>
              <a href='https://kitts.hashnode.dev/' target='__blank'>
                Hashnode
              </a>
            </span>
          </div>

          <div className='border-t border-t-solid border-t-[#020a13] my-12 flex flex-col-reverse items-center md:flex md:flex-row md:justify-between'>
            <div className='my-8'>
              <span className='text-xs uppercase flex flex-row items-center font-medium'>
                <CgCopyright className='mr-2' /> Adekite Akala{' '}
                {new Date().getFullYear()}
              </span>
            </div>

            <div className='my-8 flex flex-row gap-4'>
              <span className='text-sm lg:text-xs font-semibold uppercase w-full underline transition-all pb-2'>
                <a
                  className='flex flex-row gap-1'
                  href='https://kitts.hashnode.dev/'
                  target='__blank'
                >
                  <CgArrowTopRight /> Github
                </a>
              </span>
              <span className='text-sm lg:text-xs font-semibold uppercase w-full underline transition-all pb-2'>
                <a
                  className='flex flex-row gap-1'
                  href='https://kitts.hashnode.dev/'
                  target='__blank'
                >
                  <CgArrowTopRight /> LinkedIn
                </a>
              </span>
              <span className='text-sm lg:text-xs font-semibold uppercase w-full underline transition-all pb-2'>
                <a
                  className='flex flex-row gap-1'
                  href='https://kitts.hashnode.dev/'
                  target='__blank'
                >
                  <CgArrowTopRight /> Twitter
                </a>
              </span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Connect;
