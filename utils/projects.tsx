interface Projects {
  id: number;
  title: String;
  tags: String[];
  live: String;
  code: String;
  description: String;
}

export const projects: Projects[] = [
  {
    id: 1,
    title: `invoiceMe`,
    tags: [`Vue`, `Vuex`, `Firebase`],
    live: `https://myinvoice.netlify.app/`,
    code: `https://github.com/sambabib/invoice-app`,
    description: `invoiceMe helps you provide invoices to your clients, these invoices can be paid forward, edited, and saved`,
  },
  {
    id: 2,
    title: `myMuuVees`,
    tags: [`Nuxtjs`],
    live: `https://mymuuvees.herokuapp.com/`,
    code: `https://github.com/sambabib/myMuuVees`,
    description: `this is an app that shows movie plots, ratings. myMuuVees is built ontop a dummy movie api.`,
  },
  {
    id: 3,
    title: `shop.fanny`,
    tags: [`React`, `Redux`, `Mongodb`, `Nodejs`, `Expressjs`],
    live: ``,
    code: `https://github.com/sambabib/shop-fanny`,
    description: `shop.fanny is as an e-commerce store that lets you shop your favorite items. It is built ontop the MERN stack.`,
  },
  {
    id: 4,
    title: `robofriends`,
    tags: [`React`],
    live: `https://sambabib.github.io/robofriends/`,
    code: `https://github.com/sambabib/robofriends`,
    description: `robofriends was my very first react app, showing all of my friends... my robofriends.`,
  },
  {
    id: 5,
    title: `kittsfolio`,
    tags: [`Typescript`, `Nextjs`, `Framer-Motion`],
    live: ``,
    code: `https://github.com/sambabib/kittsfolio`,
    description: `My portfoio website built in Typescript && Nextjs.`,
  },
  {
    id: 6,
    title: `resagratia`,
    tags: [`React`, `Expressjs`, `Nodejs`, `Sanity.io`, `Mongodb`],
    live: `https://resagratia.com`,
    code: ``,
    description: `An e-learning webapp for data professionals and enthusiasts`,
  },
];
