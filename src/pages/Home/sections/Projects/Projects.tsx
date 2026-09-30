import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  styled,
} from "@mui/material";
import { useProjects } from "../../../../hooks/useProjects";

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  textAlign: "center",
  scrollMarginTop: theme.spacing(9),
}));

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }));

const StyledCardContent = styled(CardContent)({
    flexGrow: 1,
  });

const StyledCardActions = styled(CardActions)({
    justifyContent: "center",
  });

const Projetos: React.FC = () => {
  const { projectList } = useProjects();

  return (
    <StyledContainer component="section" id="projetos" aria-labelledby="projects-title">
      <Typography id="projects-title" variant="h2" gutterBottom color={"primary.main"}>
        Projetos
      </Typography>

      <Grid container justifyContent="center" spacing={3}>
        {projectList.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                alt={`Prévia do projeto ${project.title}`}
                image={project.image}
                loading="lazy"
                sx={{ objectFit: "cover" }}
              />
              <StyledCardContent>
                <Typography variant="h3" component="h3" color={"primary.main"}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color={"secondary.main"} sx={{ mb: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="caption" color={"secondary.main"}>
                  {project.role} · {project.technologies.join(" · ")}
                </Typography>
              </StyledCardContent>
              <StyledCardActions>
                <Button
                  size="small"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver o projeto ${project.title} no GitHub`}
                >
                  Ver projeto
                </Button>
              </StyledCardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Projetos;
