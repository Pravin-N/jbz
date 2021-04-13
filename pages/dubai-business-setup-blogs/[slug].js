import articles from "../../components/articles";

export async function getStaticPaths() {
  const paths = await articles.map((article) => ({
    params: { slug: article.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data = articles.filter((p) => p.slug === params.slug);
  return {
    props: {
      info: data[0],
    },
  };
}
const Blog = ({ info }) => {
  return <div>Details Page</div>;
};

export default Blog;
