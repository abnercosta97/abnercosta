import { Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import StyledButton from "../StyledButton/StyledButton";

const DownloadCVButton = () => {
  return (
    <StyledButton
      component="a"
      href={`${import.meta.env.BASE_URL}AbnerCostaCV.pdf`}
      download="AbnerCostaCV.pdf"
    >
      <DownloadIcon />
      <Typography>Download CV</Typography>
    </StyledButton>
  );
};

export default DownloadCVButton;
