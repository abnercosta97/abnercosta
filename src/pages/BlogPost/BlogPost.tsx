import { Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getBlogPost } from "../../service/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", color: "#ffffff", backgroundColor: "#161513" }}>
        <NavBar />
        <Container component="main" sx={{ pt: 14, pb: 10, flexGrow: 1 }}>
          <Typography variant="h1" sx={{ color: "#ffffff" }}>Artigo não encontrado</Typography>
          <Link component={RouterLink} to="/blog">Voltar para o blog</Link>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", color: "#ffffff", backgroundColor: "#161513" }}>
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ pt: 12, pb: 10, flexGrow: 1 }}>
        <Link component={RouterLink} to="/blog" color="secondary.main">← Voltar para o blog</Link>
        <Box component="article" aria-labelledby="post-title" sx={{ color: "#ffffff", "& h2, & h3, & p, & li": { color: "#ffffff" } }}>
          <Typography id="post-title" variant="h1" sx={{ mt: 4, mb: 2, color: "#ffffff" }}>{post.title}</Typography>
          <Typography color="secondary.main" sx={{ mb: 5 }}>{post.summary}</Typography>
          <Box
            sx={{ "& h2": { mt: 5 }, "& p": { lineHeight: 1.8 }, "& a": { color: "#9cd9f9" } }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogPost;
