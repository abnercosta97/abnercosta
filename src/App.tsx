import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/BlogPost/BlogPost";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
