import PageTitle from "@components/data-display/PageTitle";
import ListaProfessorCard from "@components/data-display/ProfessorCard/listaProfessorCard";
import usePesquisaProfessor from "@data/hooks/pages/usePesquisaProfessor";
import { Container, Icon, TextField } from "@mui/material";


export default function PesquisaPorfessorPage() {
    const { professores, onSearch, selecionarProfessor } = usePesquisaProfessor()
    return (
        <Container>
        < TextField 
            sx={{ mt: 3, mb: 1 }}
            label={'Encontre um professor'}
            InputProps={{
                startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>
            }}
            onChange={({ target: { value }}) => onSearch(value)}
            fullWidth
            required        
        />
        <PageTitle 
            title="Professores Encontrados" 
            subtitle="Clique sobre um professor para ver os detalhes e poder marcar uma aula com o mesmo"
        />

        <ListaProfessorCard 
            professores={professores ?? []} 
            onClick={selecionarProfessor}
            />
        </Container>


    );
}