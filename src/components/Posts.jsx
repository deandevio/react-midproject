export const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="">
      {posts.map((post) => {
        return (
          <div className="border-2 border-emerald-400" key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
};
