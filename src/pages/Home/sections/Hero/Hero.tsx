import { Box, Container, Grid, Typography, styled, useMediaQuery } from "@mui/material";
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
  padding: theme.spacing(10, 0, 6),
  position: "relative",
  overflow: "hidden",
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
              <Typography variant="h1" color="primary" textAlign={"center"}>
                Abner Costa
              </Typography>
              <Typography variant="h2" color="secondary" textAlign={"center"}>
                Desenvolvedor Full Stack
              </Typography>
              <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                spacing={5}
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
