import { useEffect } from "react";
import { Box, Card, CardContent, Chip, Container, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { blogPosts } from "../../service/blog";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Abner Costa";
  }, []);

  return (
  <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", color: "#ffffff", backgroundColor: "#161513" }}>
    <NavBar />
    <Container component="main" maxWidth="md" sx={{ pt: 12, pb: 10, flexGrow: 1 }}>
      <Typography variant="h1" sx={{ mb: 2, color: "#ffffff" }}>Blog</Typography>
      <Typography color="secondary.main" sx={{ mb: 5 }}>
        Reflexões sobre desenvolvimento, carreira e os projetos que estou construindo.
      </Typography>
      <Stack spacing={3}>
        {blogPosts.map((post) => (
          <Card key={post.slug} component="article" sx={{ backgroundColor: "#242321", color: "#ffffff" }}>
            <CardContent>
              <Typography variant="caption" color="secondary.main">
                {new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(`${post.publishedAt}T12:00:00`))}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", sm: "2rem" }, my: 1, color: "#ffffff" }}>
                <Link component={RouterLink} to={`/blog/${post.slug}`} color="primary.main" underline="hover">
                  {post.title}
                </Link>
              </Typography>
              <Typography color="secondary.main" sx={{ mb: 2 }}>{post.summary}</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{ color: "text.primary", borderColor: "divider" }}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
    <Footer />
  </Box>
  );
};

export default Blog;
