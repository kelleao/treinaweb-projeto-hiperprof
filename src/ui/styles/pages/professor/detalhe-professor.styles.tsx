import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxCardProfessor = styled(Box)`
  display: grid;
  grid-template-columns: 300px 1fr;
  margin: auto;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`;

export const BoxImage = styled(Box, {
  shouldForwardProp: (props) => props !== "foto",
})<{ foto?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: no-repeat center/cover
    ${({ foto }) => `url(${foto ?? "/user.svg"})`};
  height: 100%;
  border-radius: ${({ theme }) => theme.spacing(1, 0, 0, 1)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    border-radius: ${({ theme }) => theme.spacing(1, 1, 0, 0)};
    height: 300px;
  }
`;

export const BoxDescription = styled("div")`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.spacing(0, 1, 1, 0)};

  .box_direita,
  .box_esquerda {
    height: 100%;
    padding: ${({ theme }) => theme.spacing(5)};
  }

  .box_direita {
    text-align: center;
  }

  .box_esquerda {
    .descricao {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  .MuiButton-root {
    padding: ${({ theme }) => theme.spacing(1, 3)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing()};

    .box_direita,
    .box_esquerda {
      padding: ${({ theme }) => theme.spacing()};
    }
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    border-radius: ${({ theme }) => theme.spacing(0, 0, 1, 1)};
  }
`;
