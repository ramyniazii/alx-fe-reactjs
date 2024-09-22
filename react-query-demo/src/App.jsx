import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent'; // Ensure this path is correct

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;