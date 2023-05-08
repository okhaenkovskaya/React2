import { useParams, useLocation } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  const location = useLocation();

  console.log(params, "params");
  console.log(location, "location");

  return (
    <div>
      <h1>Post page ---- Lorem ipsum dolor sit amet.</h1>
    </div>
  );
};

export default PostPage;
