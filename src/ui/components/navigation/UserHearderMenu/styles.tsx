import { Menu } from "@mui/material";
import { styled } from "@mui/material/styles";

export const UserHeaderMenuContainer = styled("div")`
  display: inline-block;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`;

export const UserMenu = styled(Menu)`
  li {
    box-sizing: border-box;
    padding: ${({ theme }) => theme.spacing(0, 2)};
  }

  .MuiIcon-root {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
