import { AlunoInterface } from "@data/@types/alunos";
import usePainelProfessor from "@data/hooks/pages/professor/usePainelProfessor";
import { TextFormatService } from "@data/services/TextFormatService";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Icon,
  Typography,
} from "@mui/material";
import { AccordionStyled } from "@styles/pages/professor/index.styles";
import Fetch from "ui/components/data-display/Fetch";
import PageTitle from "ui/components/data-display/PageTile";

export default function PainelProfessorPage() {
  const { alunos, expanded, setExpanded } = usePainelProfessor();

  return (
    <>
      <PageTitle title="Lista de alunos" />
      <Fetch
        data={alunos}
        mensage={"Nenhum aluno agendado"}
        render={(alunos) => {
          return (
            <AlunoList
              alunos={alunos}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          );
        }}
      />
    </>
  );
}

interface AlunosListProps {
  alunos: AlunoInterface[];
  setExpanded: (value: string) => void;
  expanded: string;
}
function AlunoList({ alunos, expanded, setExpanded }: AlunosListProps) {
  return (
    <>
      {alunos.map((aluno) => {
        return (
          <Box key={aluno.id} sx={{ my: 5 }}>
            <AccordionStyled
              expanded={expanded === aluno.id.toString()}
              onChange={(_, b) =>
                b ? setExpanded(aluno.id.toString()) : setExpanded("")
              }
            >
              <AccordionSummary>
                <Typography variant="h6">{aluno.nome}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                  <Icon>person</Icon>
                  {aluno.nome}
                </Typography>
                <Typography sx={{ mb: 2, mt: 5 }}>
                  <Icon>calendar_month</Icon>
                  {TextFormatService.dataFromText(aluno.data_aula as string)}
                </Typography>
                <Typography>
                  <Icon>email</Icon>
                  {aluno.email}
                </Typography>
              </AccordionDetails>
            </AccordionStyled>
          </Box>
        );
      })}
    </>
  );
}
