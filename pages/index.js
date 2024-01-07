import client from "client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "./components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlock";

export default function Home(props) {
  console.log(props.blocks);
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export async function getStaticProps() {
  // Get posts from WordPress
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });

  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
}
