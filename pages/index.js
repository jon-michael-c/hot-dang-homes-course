import client from "client";
import { gql } from "@apollo/client";

export default function Home(props) {
  console.log(props.data);
  return <div>Next JS &amp; WordPress course.</div>;
}

export async function getStaticProps() {
  // Get posts from WordPress
  const { data } = await client.query({
    query: gql`
      {
        posts {
          nodes {
            id
            title
            slug
            excerpt
            content
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}
