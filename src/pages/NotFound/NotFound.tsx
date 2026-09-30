import { Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => (
  <Container component="main" sx={{ py: 16 }}>
    <Typography variant="h1">Página não encontrada</Typography>
    <Box sx={{ mt: 2 }}><Link component={RouterLink} to="/">Voltar para o início</Link></Box>
  </Container>
);

export default NotFound;
