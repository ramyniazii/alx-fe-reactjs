import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();
  return <div>Blog Post ID: {postId}</div>;
}

// In your App.jsx or relevant component
<Route path="/blog/:postId" element={<BlogPost />} />
