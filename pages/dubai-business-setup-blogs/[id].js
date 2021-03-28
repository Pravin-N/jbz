const featureData = [
  {
    id: "how-to-get-a-business-license-in-mainland-dubai",
    name: "mainland",
  },
  {
    id: "how-to-get-a-business-license-in-freezone-dubai",
    name: "freezone",
  },
  {
    id: "how-to-get-A-offshore-license-in-uae",
    name: "offshore",
  },
];

const mainland = {};

const freezone = {};

const offshore = {};

export const getStaticPaths = async () => {
  // const res = await fetch("");
  // const data = await res.json();
  const data = await featureData;

  const paths = data.map((singlefeatureData) => {
    return {
      params: { id: singlefeatureData.id, name: singlefeatureData.name },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const name = context.params.name;
  // const res = await fetch("" + id);
  //   const data = await res.json();
  const data = await name;

  return {
    props: { blog: data },
  };
};

const Blogs = () => {
  return <div>Details Page</div>;
};

export default Blogs;
