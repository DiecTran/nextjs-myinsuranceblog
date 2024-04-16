import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to my insurance blog </title>
        <meta
          name="description"
          content="I post about home auto and commercial insurance "
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 3600,
  };
}
