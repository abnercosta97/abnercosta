import React from "react";
import { Box, Container, Link, Typography, useTheme } from "@mui/material";

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="sobre"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: "primary.main",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Sobre Mim
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "justify" }}
          color={"secondary.main"}
        >
          Sou desenvolvedor de software na Datainfo, atuando no contexto do Programa
          Queimadas do INPE. Trabalho na interseção entre sistemas, dados ambientais
          e infraestrutura, contribuindo para soluções que transformam informações
          geoespaciais em suporte à decisão.
        </Typography>
        <Typography sx={{ textAlign: "justify", mt: 2 }} color="secondary.main">
          Minha experiência inclui desenvolvimento de APIs e aplicações web,
          pipelines de dados, automação, DevOps, arquitetura de software,
          arquitetura de dados e sustentação de ambientes Linux e cloud native.
          Também sou coautor de trabalhos sobre Big Data, datasets para assistente
          virtual e critérios geoespaciais para cálculo de área queimada.
        </Typography>
        <Typography sx={{ textAlign: "center", mt: 3 }} color="secondary.main">
          Conheça minha <Link href="#experiencia">experiência</Link>, minhas <Link href="#publicacoes">publicações</Link> e os <Link href="#projetos">projetos</Link> que ajudam a contar essa trajetória.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
