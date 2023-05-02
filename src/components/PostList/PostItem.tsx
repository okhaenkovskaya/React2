import style from "./PostList.module.scss";

type Props = {
  title: string;
  body: string;
};

const PostItem = ({ title, body }: Props) => {
  return (
    <div className={style.postItem}>
      <h2>{title}</h2>
      {body}
    </div>
  );
};

export default PostItem;
