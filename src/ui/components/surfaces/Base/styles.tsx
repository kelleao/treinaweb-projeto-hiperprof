import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const ButtonStyle = styled(Button)`
  &.MuiButton-outlined {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const BoxDrawer = styled(Box)`
  .linkImage {
    padding: ${({ theme }) => theme.spacing(1)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;
