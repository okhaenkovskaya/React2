import style from "./PostList.module.scss";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  body: string;
  id: number;
};

const PostItem = ({ title, body, id }: Props) => {
  console.log(id, "id");

  return (
    <div className={style.postItem}>
      <h2 className={style.postTitle}>
        <Link to={id.toString()}>{title}</Link>
      </h2>
      {body}
    </div>
  );
};

export default PostItem;
