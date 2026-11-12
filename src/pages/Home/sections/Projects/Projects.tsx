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
  padding: theme.spacing(7, 1.5),
  textAlign: "center",
  scrollMarginTop: theme.spacing(9),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(8, 2),
  },
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
          <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ minWidth: 0 }}>
            <StyledCard>
              {project.image ? (
                <CardMedia
                  component="img"
                  height="200"
                  alt={`Prévia do projeto ${project.title}`}
                  image={project.image}
                  loading="lazy"
                  sx={{ objectFit: "cover" }}
                />
              ) : (
                <Box sx={{ height: 200, display: "grid", placeItems: "center", px: 3, background: "linear-gradient(135deg, #242321, #0d0d0c)" }}>
                  <Typography variant="h3" sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" }, overflowWrap: "anywhere" }} color="primary.main" textAlign="center">
                    {project.title}
                  </Typography>
                </Box>
              )}
              <StyledCardContent>
                <Typography variant="h5" component="h3" color={"primary.main"} sx={{ overflowWrap: "anywhere" }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color={"secondary.main"} sx={{ mb: 1, overflowWrap: "anywhere" }}>
                  {project.description}
                </Typography>
                <Typography variant="caption" color={"secondary.main"} sx={{ display: "block", overflowWrap: "anywhere" }}>
                  {project.role} · {project.technologies.join(" · ")}
                </Typography>
              </StyledCardContent>
              <StyledCardActions>
                <Button
                  size="small"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                   aria-label={`${project.linkLabel ?? "Ver projeto"}: ${project.title}`}
                >
                  {project.linkLabel ?? "Ver projeto"}
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
