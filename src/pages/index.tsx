import PageTitle from "ui/components/data-display/PageTile";
import { Icon, TextField, Button } from "@mui/material";
import { BoxButtons, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  return (
    <HomeContainer>
      <PageTitle
        title="ENCONTRE O PROFESSOR IDEAL PARA VOCÊ!"
        subtitle="Pesquise pelo professor ideal para você"
      />
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Encontre um  Professor"}
        InputProps={{
          startAdornment: <Icon>search</Icon>,
        }}
        fullWidth
        required
      />
      <BoxButtons>
        <Button type="submit" variant="contained">
          Buscar o professor perfeito
        </Button>
      </BoxButtons>
    </HomeContainer>
  );
}
