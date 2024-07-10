import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBacground";

const Hero = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "350px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.main}`,
    position: "relative",
    zIndex: 2,
  }));

  const ContentWrapper = styled(Box)(() => ({
    position: "relative",
    zIndex: 2,
  }));

  return (
    <StyledHero>
      {isDesktop && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={1}
          overflow="hidden"
        >
          <AnimatedBackground />
        </Box>
      )}
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box position={"relative"} textAlign="center">
              <StyledImg src={Avatar} alt="Avatar" />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <ContentWrapper>
              <Typography variant="h1" color="primary" textAlign={"center"}>
                Abner Costa
              </Typography>
              <Typography variant="h3" color="secondary" textAlign={"center"}>
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
                  <StyledButton onClick={() => console.log("Download")}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <StyledButton onClick={() => console.log("Contato")}>
                    <EmailIcon />
                    <Typography>Contato</Typography>
                  </StyledButton>
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
