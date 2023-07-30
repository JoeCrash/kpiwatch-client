import { Box } from "@mui/material";
import { styled } from "@mui/material";

//todo theme.background.light extends not being detected, fix later
//theme.palette.background.light
const DashboardBox = styled(Box)(() => ({
  backgroundColor: "#2d2d34",
  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
}));

export default DashboardBox;
