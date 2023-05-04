import heroData from "../../data/hero.json";

import Hero from "../../components/Hero";
import PostList from "../../components/PostList";

const HomePage = () => {

  return (
    <>
      <Hero heroData={heroData} />
      <PostList />
    </>
  );
};

export default HomePage;
