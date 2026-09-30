import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  useTheme,
} from "@mui/material";

import skillsData from "../../../../service/skillsData";

const Skills: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        padding: "2rem",
        backgroundColor: theme.palette.background.default,
        color: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Conhecimentos
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((skill) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
            <Card
              sx={{
                backgroundColor: "#282828",
                color: "#ffffff",
                textAlign: "center",
                padding: "1rem",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={skill.icon}
                alt={skill.name}
                loading="lazy"
                sx={{ objectFit: "contain", margin: "auto" }}
              />
              <CardContent>
                <Typography variant="h3" sx={{ fontSize: "1.1rem" }}>{skill.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
