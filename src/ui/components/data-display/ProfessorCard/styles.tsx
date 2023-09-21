import { styled } from "@mui/material/styles";

export const ListStyled = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 500px;
  padding: 0;
  gap: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BoxCarItemdStyled = styled("li")`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

export const BoxAvatarStyled = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 400px;
  background-color: ${({ theme }) => theme.palette.grey[300]};
`;

export const ImageStyled = styled("img")`
  width: 100%;
`;

export const BoxContainsStyled = styled("div")`
  height: 400px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};

  .text-container .descricao {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
