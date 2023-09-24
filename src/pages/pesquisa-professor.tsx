import usePesquisaProfessor from "@data/hooks/pages/usePesquisaProfessor";
import { TextField, Icon, Container } from "@mui/material";
import Fetch from "ui/components/data-display/Fetch";
import PageTitle from "ui/components/data-display/PageTile";
import ListaProfessorCard from "ui/components/data-display/ProfessorCard/listaProfessorCard";

export default function PesquisaProfessorPage() {
  const { professores, onSearch, selecionarProfessor } = usePesquisaProfessor();

  return (
    <Container>
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Encontre um professor"}
        InputProps={{
          startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>,
        }}
        onChange={({ target: { value } }) => onSearch(value)}
        fullWidth
        required
      />
      <PageTitle
        title="Professores Encontrados"
        subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com o mesmo"
      />

      <Fetch
        data={professores}
        mensage={"Nenhum Professor Encontrado"}
        render={(professores) => {
          return (
            <ListaProfessorCard
              professores={professores}
              onclick={selecionarProfessor}
            />
          );
        }}
      />
    </Container>
  );
}
