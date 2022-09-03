interface Posts {
  id: string;
  title: string;
  link: string;
  postedOn: string;
}

export const posts: Posts[] = [
  {
    id: '01',
    title: `How to use React Custom Hooks to persist React state in Local Storage.`,
    link: `https://kitts.hashnode.dev/how-to-use-react-custom-hooks-to-persist-react-state-in-local-storage`,
    postedOn: `Apr 11, 2022`,
  },
  {
    id: '02',
    title: `How to use Redux/Toolkit: A Developer's first Interface with @reduxjs/toolkit`,
    link: `https://kitts.hashnode.dev/how-to-use-reduxtoolkit-a-developers-first-interface-with-reduxjstoolkit`,
    postedOn: `Mar 13, 2022`,
  },
];
