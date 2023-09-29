import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxStyled = styled(Box)`
  position: relative;
  z-index: 1;

  input {
    position: absolute;
    opacity: 0;
  }
`;
