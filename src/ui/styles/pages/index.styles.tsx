import { styled } from "@mui/material/styles";

export const HomeContainer = styled("form")`
  max-width: ${({ theme }) => theme.breakpoints.values.md}px;
  margin: auto;
`;

export const BoxButtons = styled("div")`
  max-width: ${({ theme }) => theme.breakpoints.values.md}px;
  margin: auto;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;
