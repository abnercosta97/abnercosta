import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const AboutSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "100",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "0",
  },
}));

const About = () => {
  return (
    <AboutSection id="sobre">
      <Container>
        <Box p={10}>
          <Typography variant="h4" color="primary" textAlign={"center"}>
            Sobre mim
          </Typography>
          <Typography variant="h6" color="secondary" textAlign={"center"}>
            Desenvolvedor Front-end com experiência em React.js, Next.js, Redux,
            JavaScript, TypeScript, Styled Components, Material UI e consumo de
            APIs REST. Apaixonado pelo desenvolvimento de componentes
            reutilizáveis. Também possui experiência em projetos gerenciados por
            Metodologias Ágeis. Formado em Sistemas de Informação e cursando
            Especialização em Front-End na Digital House Brasil.
          </Typography>
        </Box>
      </Container>
    </AboutSection>
  );
};

export default About;
