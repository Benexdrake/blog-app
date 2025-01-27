import styles from '@/styles/modules/header.module.css';
import { Header } from '@/components/header/header'
import { RecentPosts } from '@/layouts/blog/recent_posts';
import { AllPosts } from '@/layouts/blog/all_posts';
// import { getAllArticles } from './services/article_service';

const Blog = () =>
{
  let page = 1;

  // const articles = await getAllArticles('');
  

  return (
    <div id='main'>
    <Header styles={styles} header='the blog' />
    {
      page == 1 ?
        <>
          <br />
          <RecentPosts articles={articles.slice(0, 4)} />
          <br />
          <AllPosts articles={articles.slice(3, articles.length)} />
        </>
        :
        <>
          <AllPosts articles={articles} />
        </>
    }
    </div>
  )
}

export default Blog


const articles = [
  {
    id: 1,
    title: "I ♥ Javascript",
    content: "This is the content of article 1",
    image: {
      src: "JS.jpg",
      alt: "I love Javascript",
    },
    link: "#i-love-javascript",
    teaser: "This is the reason why I love Javascript!",
    date: "2021-01-01",
    author: "John Doe",
    tags: [
      {
        id: 1,
        name: "Design",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        id: 2,
        name: "Research",
        bgColor: "#EEF4FF",
        textColor: "#3538CD",
      },
      {
        id: 3,
        name: "Presentation",
        bgColor: "#FDF2FA",
        textColor: "#C11574",
      },
    ],
  },
  {
    id: 2,
    title: "CSS is Awesome",
    content: "This is the content of article 2",
    image: {
      src: "TS.jpg",
      alt: "Picture with Love",
    },
    teaser: "This is the reason why I love CSS!",
    date: "2021-01-02",
    author: "Jane Doe",
    tags: [
      {
        id: 1,
        name: "Design",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        id: 2,
        name: "Research",
        bgColor: "#EEF4FF",
        textColor: "#3538CD",
      },
      {
        id: 3,
        name: "Presentation",
        bgColor: "#FDF2FA",
        textColor: "#C11574",
      },
    ],
  },
  {
    id: 3,
    title: "HTML is Cool",
    content: "This is the content of article 3",
    image: {
      src: "HTML.jpg",
      alt: "Picture with code",
    },
    teaser: "This is the reason why I love HTML!",
    date: "2021-01-03",
    author: "John Doe",
    tags: [
      {
        id: 1,
        name: "Design",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        id: 2,
        name: "Research",
        bgColor: "#EEF4FF",
        textColor: "#3538CD",
      },
      {
        id: 3,
        name: "Presentation",
        bgColor: "#FDF2FA",
        textColor: "#C11574",
      },
    ],
  },
  {
    id: 4,
    title: "React is the Best",
    content: "This is the content of article 4",
    image: {
      src: "CSharp.jpg",
      alt: "View from window to a river",
    },
    teaser: "This is the reason why I love React!",
    date: "2021-01-04",
    author: "Jane Doe",
    tags: [
      {
        id: 1,
        name: "Design",
        bgColor: "#F9F5FF",
        textColor: "#6941C6",
      },
      {
        id: 2,
        name: "Research",
        bgColor: "#EEF4FF",
        textColor: "#3538CD",
      },
      {
        id: 3,
        name: "Presentation",
        bgColor: "#FDF2FA",
        textColor: "#C11574",
      },
    ],
  },
  {
      id: 5,
      title: "React is the Best",
      content: "This is the content of article 4",
      image: {
        src: "Python.png",
        alt: "View from window to a river",
      },
      teaser: "This is the reason why I love React!",
      date: "2021-01-04",
      author: "Jane Doe",
      tags: [
        {
          id: 1,
          name: "Design",
          bgColor: "#F9F5FF",
          textColor: "#6941C6",
        },
        {
          id: 2,
          name: "Research",
          bgColor: "#EEF4FF",
          textColor: "#3538CD",
        },
        {
          id: 3,
          name: "Presentation",
          bgColor: "#FDF2FA",
          textColor: "#C11574",
        },
      ],
    },
];
