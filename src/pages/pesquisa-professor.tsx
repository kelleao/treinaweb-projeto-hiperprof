import PageTitle from "@components/data-display/PageTitle";
import ListaProfessorCard from "@components/data-display/ProfessorCard/listaProfessorCard";
import { Container, Icon, TextField } from "@mui/material";

export default function PesquisaPorfessorPage() {
    return (
        <Container>
        < TextField 
            sx={{ mt: 3, mb: 1 }}
            label={'Encontre um professor'}
            InputProps={{
                startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>
            }}
            fullWidth
            required        
        />
        <PageTitle 
            title="Professores Encontrados" 
            subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com o mesmo"
        />

        <ListaProfessorCard 
            professores={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} 
            />
        </Container>


    );
}