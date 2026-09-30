import { Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const NotFound = () => (
  <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <NavBar />
    <Container component="main" sx={{ pt: 16, pb: 10, flexGrow: 1 }}>
      <Typography variant="h1" color="text.primary">Página não encontrada</Typography>
      <Box sx={{ mt: 2 }}><Link component={RouterLink} to="/">Voltar para o início</Link></Box>
    </Container>
    <Footer />
  </Box>
);

export default NotFound;
