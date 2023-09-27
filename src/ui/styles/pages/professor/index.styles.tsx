import { styled } from "@mui/material/styles";
import { Accordion } from "@mui/material";

export const AccordionStyled = styled(Accordion)`
  .MuiAccordionSummary-root {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    border-radius: ${({ theme }) => theme.spacing(1)};
  }

  .MuiTypography-root {
    display: flex;
    align-items: center;
  }

  .MuiAccordionDetails-root {
    padding: ${({ theme }) => theme.spacing(5)};
  }

  .MuiIcon-root {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;
