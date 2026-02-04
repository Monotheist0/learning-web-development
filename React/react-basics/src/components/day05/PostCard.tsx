export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '10px',
        backgroundColor: '#2a2a2a',
      }}
    >
      <h3 style={{ color: 'orange', marginTop: 0 }}>{post.title}</h3>
      <p style={{ fontSize: '14px', color: '#ccc' }}>{post.body}</p>
    </div>
  );
}
export default PostCard;
