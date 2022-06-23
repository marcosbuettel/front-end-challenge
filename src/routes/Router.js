import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import PostDetail from '../components/PostDetail/PostDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/postDetail/:post" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
