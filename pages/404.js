import anim404 from "../public/assets/anim/404.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const Custom404 = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: anim404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section className="pt-150 pb-120 section-pattern">
        <Lottie options={defaultOptions1} height={300} width={350} />
        <div class="section-title text-center">
          <h2>Page Not Found</h2>
        </div>
      </section>
    </>
  );
};

export default Custom404;
