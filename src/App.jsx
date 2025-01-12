import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { createContext } from 'react';
import blogData from './data';

function App() {
  const PostContext = createContext();

  return (
    <PostContext.Provider value={blogData}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </PostContext.Provider>
  );
}

export default App;
