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
      <Box sx={{ minHeight: "100vh", pt: 14 }}>
        <NavBar />
        <Container component="main" sx={{ pb: 10 }}>
          <Typography variant="h1">Artigo não encontrado</Typography>
          <Link component={RouterLink} to="/blog">Voltar para o blog</Link>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", pt: 12 }}>
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ pb: 10 }}>
        <Link component={RouterLink} to="/blog" color="secondary.main">← Voltar para o blog</Link>
        <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>{post.title}</Typography>
        <Typography color="secondary.main" sx={{ mb: 5 }}>{post.summary}</Typography>
        <Box
          component="article"
          sx={{ "& h2": { mt: 5 }, "& p": { lineHeight: 1.8 }, "& a": { color: "primary.main" } }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogPost;
