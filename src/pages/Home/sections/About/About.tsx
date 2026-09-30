import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";

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
          Cristão, casado, pai da Elisa e do Eduardo. Estudante de
          Desenvolvimento de Software Multiplataforma na FATEC Jacareí.
          Apaixonado por matemática, tecnologia e inovação. Atualmente, estou me
          tornando desenvolvedor full stack, com foco inicial em back-end. Atuo
          como desenvolvedor de software no Programa Queimadas do INPE,
          aplicando tecnologia e inovação em soluções para monitoramento
          ambiental. Meu objetivo é continuar evoluindo na programação e
          contribuir com produtos que resolvam problemas reais. Estou aberto a
          novas oportunidades como desenvolvedor júnior ou pleno. Se você
          gostou do meu trabalho, entre em contato.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
