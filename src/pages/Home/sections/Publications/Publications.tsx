import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import { publications } from "../../../../service/publications";

const Publications = () => (
  <Box component="section" id="publicacoes" sx={{ py: { xs: 7, md: 10 } }}>
    <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 3 } }}>
      <Typography variant="h2" color="primary.main" textAlign="center" gutterBottom>
        Publicações
      </Typography>
      <Typography color="secondary.main" textAlign="center" sx={{ maxWidth: 760, mx: "auto", mb: 5 }}>
        Trabalhos que conectam desenvolvimento de software, ciência de dados e monitoramento ambiental.
      </Typography>
      <Grid container spacing={3}>
        {publications.map((publication) => (
          <Grid item xs={12} md={6} key={publication.doi}>
            <Card component="article" sx={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "background.paper", minWidth: 0 }}>
              <CardContent sx={{ flexGrow: 1, minWidth: 0, overflowWrap: "anywhere", p: { xs: 2.5, sm: 3 } }}>
                <Typography variant="overline" color="secondary.main">
                  {publication.year} · {publication.event}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: "1.15rem", md: "1.45rem" }, my: 1, overflowWrap: "anywhere" }} color="primary.main">
                  {publication.title}
                </Typography>
                <Typography color="secondary.main" sx={{ lineHeight: 1.7 }}>
                  {publication.summary}
                </Typography>
                <Typography variant="caption" color="secondary.main" sx={{ display: "block", mt: 2 }}>
                  DOI: {publication.doi}
                </Typography>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button href={publication.link} target="_blank" rel="noreferrer" aria-label={`Abrir publicação ${publication.title}`}>
                  Ver publicação
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Publications;
