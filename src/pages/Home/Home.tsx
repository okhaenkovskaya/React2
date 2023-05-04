import heroData from "../../data/hero.json";
import Hero from "../../components/Hero";
import PostList from "../../components/PostList";

const HomePage = () => {
  return (
    <>
      <Hero title={heroData.title}
            button={heroData.button}
            image={heroData.image}
      />
      <PostList />
    </>
  );
};

export default HomePage;
