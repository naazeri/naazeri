import { createContext } from 'react';
import blogData from './data';
import AppRoutes from './routes';

function App() {
  const PostContext = createContext();

  return (
    <PostContext.Provider value={blogData}>
      <AppRoutes />
    </PostContext.Provider>
  );
}

export default App;
