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
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <NavBar />
        <Container component="main" sx={{ pt: 14, pb: 10, flexGrow: 1 }}>
          <Typography variant="h1">Artigo não encontrado</Typography>
          <Link component={RouterLink} to="/blog">Voltar para o blog</Link>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ pt: 12, pb: 10, flexGrow: 1 }}>
        <Link component={RouterLink} to="/blog" color="secondary.main">← Voltar para o blog</Link>
        <Box component="article" aria-labelledby="post-title" sx={{ color: "text.primary" }}>
          <Typography id="post-title" variant="h1" sx={{ mt: 4, mb: 2 }}>{post.title}</Typography>
          <Typography color="secondary.main" sx={{ mb: 5 }}>{post.summary}</Typography>
          <Box
            sx={{ "& h2": { mt: 5 }, "& p": { lineHeight: 1.8 }, "& a": { color: "primary.main" } }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogPost;
