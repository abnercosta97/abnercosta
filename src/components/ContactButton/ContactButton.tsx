import { Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../StyledButton/StyledButton";

const ContactButton = () => {
  const mailtoUrl = `mailto:abnerrodrigo.sc@gmail.com?subject=${encodeURIComponent(
    "Contato"
  )}&body=${encodeURIComponent("Olá, gostaria de entrar em contato.")}`;

  return (
    <StyledButton component="a" href={mailtoUrl}>
      <EmailIcon />
      <Typography>Contato</Typography>
    </StyledButton>
  );
};

export default ContactButton;
