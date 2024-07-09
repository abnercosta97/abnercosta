import { AppBar, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  const StyledToobar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.background.default,
  }));
  const StyledImg = styled("img")(() => ({
    width: "80px",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToobar>
          <MenuItem>
            <StyledImg src={Logo} alt="Logo" />
          </MenuItem>

          <MenuItem>
            {" "}
            <Typography color="secondary"> Sobre</Typography>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Typography color="secondary"> Skills</Typography>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <Typography color="secondary"> Projetos</Typography>{" "}
          </MenuItem>
        </StyledToobar>
      </AppBar>
    </>
  );
};

export default NavBar;
