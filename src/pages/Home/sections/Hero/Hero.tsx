import { Box, Container, Grid, Stack, Typography, styled, useMediaQuery } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadCVButton from "../../../../components/DownloadCVButton/DownloadCVButton";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBacground";
import theme from "../../../../Theme";

const StyledHero = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "min(100vh, 900px)",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(10, 1.5, 5),
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(10, 0, 6),
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "min(75%, 320px)",
  aspectRatio: "1",
  objectFit: "cover",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.main}`,
  position: "relative",
  zIndex: 2,
}));

const ContentWrapper = styled(Box)(() => ({
  position: "relative",
  zIndex: 2,
}));

const Hero = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <StyledHero>
      {isDesktop && <AnimatedBackground />}
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box position={"relative"} textAlign="center">
              <StyledImg src={Avatar} alt="Retrato de Abner Costa" />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <ContentWrapper>
               <Typography variant="h1" color="primary" textAlign={"center"} sx={{ overflowWrap: "anywhere" }}>
                Abner Costa
              </Typography>
               <Typography variant="h2" color="secondary" textAlign={"center"} sx={{ fontSize: { xs: "1.45rem", sm: "2rem" }, overflowWrap: "anywhere" }}>
                Desenvolvedor de Sistemas e Cientista de Dados
              </Typography>
              <Typography color="secondary.main" textAlign="center" sx={{ maxWidth: 680, mx: "auto", mt: 2, lineHeight: 1.7, overflowWrap: "anywhere" }}>
                No Programa Queimadas (INPE), atuo na sustentação de infraestrutura de software e na análise estratégica de dados geoespaciais para suporte à decisão.
              </Typography>
              <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                {["Software", "Dados ambientais", "DevOps", "Geoprocessamento"].map((item) => (
                  <Typography key={item} variant="caption" color="secondary.main" sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1, px: 1.25, py: 0.5 }}>
                    {item}
                  </Typography>
                ))}
              </Stack>
              <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                spacing={{ xs: 1.5, md: 3 }}
                pt={2}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <DownloadCVButton />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <ContactButton />
                </Grid>
              </Grid>
            </ContentWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
