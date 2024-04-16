// import AllPosts from "../../components/posts/all-posts";
// import { getAllPosts } from "../../lib/posts-util";
// import Head from "next/head";

// export default function AllPostsPage(props) {
//   return (
//     <>
//       <Head>
//         <title>All My Insurance Posts</title>
//         <meta name="description" content="A List of All Insurance Posts" />
//       </Head>
//       <AllPosts posts={props.posts} />;
//     </>
//   );
// }

// export function getStaticProps() {
//   const allPosts = getAllPosts();

//   return {
//     props: {
//       posts: allPosts,
//     },
//   };
// }

// import { useState } from "react";
// import Head from "next/head";
// import AllPosts from "../../components/posts/all-posts";
// import { getAllPosts } from "../../lib/posts-util";

// export default function AllPostsPage(props) {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Inside the AllPostsPage component

//   const filteredPosts = props.posts.filter((post) =>
//     post.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Head>
//         <title>All My Insurance Posts</title>
//         <meta name="description" content="A List of All Insurance Posts" />
//       </Head>
//       <div>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search posts..."
//         />
//       </div>
//       <AllPosts posts={filteredPosts} />

//       {/* <AllPosts posts={props.posts} /> */}
//     </>
//   );
// }

// export function getStaticProps() {
//   const allPosts = getAllPosts();

//   return {
//     props: {
//       posts: allPosts,
//     },
//   };
// }

import { useState } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Inside the AllPostsPage component

  const filteredPosts = props.posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>All My Insurance Posts</title>
        <meta name="description" content="A List of All Insurance Posts" />
      </Head>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search posts..."
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            maxWidth: "400px",
            boxSizing: "border-box",
            margin: "auto", // Center horizontally
            marginTop: "20px", // Margin to push it down
          }}
        />
      </div>
      <AllPosts posts={filteredPosts} />

      {/* <AllPosts posts={props.posts} /> */}
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
