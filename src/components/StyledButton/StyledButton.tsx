import { Button, ButtonProps, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "3px",
  padding: "8px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const PortfolioButton = (props: ButtonProps & { download?: string }) => (
  <StyledButton variant="text" {...(props as ButtonProps)} />
);

export default PortfolioButton;
