// images
import Javascript from '../public/assets/js.png';
import Next from '../public/assets/nextjs.svg';
import React from '../public/assets/react.png';
import Typescript from '../public/assets/typescript.png';
import Vue from '../public/assets/vuejs.svg';

interface Stack {
  id: number;
  title: string;
  image: any;
}

export const tech: Stack[] = [
  {
    id: 1,
    title: `Javascript`,
    image: Javascript,
  },
  {
    id: 2,
    title: `Typescript`,
    image: Typescript,
  },
  {
    id: 3,
    title: `React`,
    image: React,
  },
  {
    id: 4,
    title: `Next`,
    image: Next,
  },
  {
    id: 5,
    title: `Vue`,
    image: Vue,
  },
];
