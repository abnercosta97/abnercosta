import { Button, ButtonProps, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "3px",
  padding: "8px 15px",
  width: "100%",
  color: theme.palette.primary.main,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
}));

const PortfolioButton = (props: ButtonProps & { download?: string }) => (
  <StyledButton variant="text" {...(props as ButtonProps)} />
);

export default PortfolioButton;
