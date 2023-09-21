import usePesquisaProfessor from "@data/hooks/pages/usePesquisaProfessor";
import { TextField, Icon, Container } from "@mui/material";
import PageTitle from "ui/components/data-display/PageTile";
import ProfessorCard from "ui/components/data-display/ProfessorCard";
import ListaProfessorCard from "ui/components/data-display/ProfessorCard/listaProfessorCard";

export default function PesquisaProfessorPage() {
  const { professores } = usePesquisaProfessor();

  return (
    <Container>
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Encontre um professor"}
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>,
        }}
        fullWidth
        required
      />
      <PageTitle
        title="Professores Encontrados"
        subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com o mesmo"
      />
      <ListaProfessorCard
        professores={professores ?? []}
        onclick={(professor) => {}}
      />
    </Container>
  );
}
