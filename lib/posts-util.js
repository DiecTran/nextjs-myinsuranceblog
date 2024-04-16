import fs from "fs";
import path from "path";
import matter from "gray-matter";

// eslint-disable-next-line no-undef
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContnet = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContnet);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => {
    postA.date > postB.date ? -1 : 1;
  });

  return sortedPosts;

  //   for (const postFile of postFiles) {
  //     const postdata = getPostData(postFile);
  //   }
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
