import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";

const About: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="sobre"
      sx={{
        backgroundColor: theme.palette.background.default, // substitua pela cor desejada
        color: "primary.main",
        padding: "2rem 0",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Sobre Mim
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "justify" }}
          color={"secondary.main"}
        >
          {/* Adicione seu texto aqui */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Nullam ac erat ante. Fusce consectetur suscipit justo ut
          posuere. Phasellus viverra nulla ut metus varius laoreet. Quisque
          rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
