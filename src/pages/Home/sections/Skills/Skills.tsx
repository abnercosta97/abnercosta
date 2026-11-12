import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Chip,
  CardContent,
  Container,
  Stack,
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
        px: { xs: 1.5, sm: 2, md: 3 },
        py: { xs: 6, md: 8 },
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
      <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" alignItems="stretch">
        {skillsData.map((skill) => (
          <Grid item xs={12} sm={6} lg={3} key={skill.name} sx={{ minWidth: 0 }}>
            <Card
              sx={{
                backgroundColor: "#282828",
                color: "#ffffff",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "@media (hover: hover)": {
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
                  },
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 2.5 }, flexGrow: 1, minWidth: 0 }}>
                {skill.icon && <Box component="img" src={skill.icon} alt="" aria-hidden="true" sx={{ width: 56, height: 56, objectFit: "contain", mb: 1 }} />}
                <Typography variant="h3" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, mb: 1, overflowWrap: "anywhere" }}>{skill.name}</Typography>
                <Stack direction="row" flexWrap="wrap" justifyContent="center" useFlexGap gap={0.75}>
                  {skill.items.map((item) => (
                    <Chip key={item} label={item} size="small" variant="outlined" sx={{ color: "secondary.main", borderColor: "rgba(197, 197, 197, 0.45)", maxWidth: "100%" }} />
                  ))}
                </Stack>
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
