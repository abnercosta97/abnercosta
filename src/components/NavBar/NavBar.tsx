import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/logo.png";

const pages = [
  { label: "Sobre", href: `${import.meta.env.BASE_URL}#sobre` },
  { label: "Skills", href: `${import.meta.env.BASE_URL}#skills` },
  { label: "Projetos", href: `${import.meta.env.BASE_URL}#projetos` },
  { label: "Blog", href: `${import.meta.env.BASE_URL}blog/` },
];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
  padding: "0 16px",
}));

const StyledImg = styled("img")({
  width: "80px",
});

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar component="header" position="fixed">
      <Box component="nav" aria-label="Navegação principal">
      <StyledToolbar>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
          <a href={import.meta.env.BASE_URL} aria-label="Voltar para o início">
            <StyledImg src={Logo} alt="Abner Costa" />
          </a>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="Abrir menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                <a href={page.href} style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography textAlign="center">{page.label}</Typography>
                </a>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
          <a href={import.meta.env.BASE_URL} aria-label="Voltar para o início">
            <StyledImg src={Logo} alt="Abner Costa" />
          </a>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {pages.map((page) => (
            <Button
              component="a"
              href={page.href}
              key={page.href}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
      </StyledToolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
