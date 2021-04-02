let client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  // const res = await fetch("");
  // const data = await res.json();
  let data = await client.getEntries({
    content_type: "jbzBlog",
  });

  return {
    paths: [data.items.map((item) => ({ params: { slug: item.fields.slug } }))],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  let data = await client.getEntries({
    content_type: "jbzBlog",
    "fields.slug": context.params.slug,
  });

  return {
    props: { article: data.item[0] },
  };
};

const Blog = ({ article }) => {
  return <div>Details Page</div>;
};

export default Blog;
