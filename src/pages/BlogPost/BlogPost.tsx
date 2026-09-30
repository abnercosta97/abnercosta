import { useEffect } from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { getBlogPost } from "../../service/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Abner Costa`;
      const description = document.querySelector('meta[name="description"]');
      description?.setAttribute("content", post.summary);
    }
  }, [post]);

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
        <Box
          component="article"
          aria-labelledby="post-title"
          sx={{
            color: "#ffffff",
            "& h2, & h3, & h4, & p, & li": { color: "#ffffff" },
            "& h2": { mt: 5 },
            "& p": { lineHeight: 1.8 },
            "& a": { color: "#9cd9f9" },
            "& ul, & ol": { pl: 3, lineHeight: 1.8 },
            "& pre": {
              overflowX: "auto",
              p: 2,
              borderRadius: 1,
              backgroundColor: "#0d0d0c",
              border: "1px solid rgba(255,255,255,0.16)",
            },
            "& code": { fontFamily: "monospace", color: "#d9f1ff" },
            "& table": { display: "block", overflowX: "auto", borderCollapse: "collapse", width: "100%" },
            "& th, & td": { border: "1px solid rgba(255,255,255,0.2)", p: 1.25, textAlign: "left", minWidth: 140 },
            "& th": { backgroundColor: "rgba(255,255,255,0.1)" },
            "& blockquote": { borderLeft: "4px solid #9cd9f9", pl: 2, ml: 0, color: "#c5c5c5" },
            "& img": { maxWidth: "100%", height: "auto" },
          }}
        >
          <Typography id="post-title" variant="h1" sx={{ mt: 4, mb: 2, color: "#ffffff" }}>{post.title}</Typography>
          <Typography color="secondary.main" sx={{ mb: 5 }}>{post.summary}</Typography>
          <Box dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogPost;
