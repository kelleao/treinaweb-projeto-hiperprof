import PageTitle from "@components/data-display/PageTitle";
import useIndex from "@data/hooks/pages/useIndex";
import { Button, Icon, TextField } from "@mui/material";
import { BoxButtons, HomeContainer } from "@styles/pages/index.styles";


export default function Home() {
    const {
        messageErro,
        setSearch,
        onBuscarProfessor,
    } = useIndex();
    return (
        <HomeContainer onSubmit={onBuscarProfessor}>
            <PageTitle 
                title="ENCONTRE O PROFESSOR IDEAL PARA VOCÊ !" 
                subtitle="Pesquise pelo professor ideal para você" 
            />
            <TextField 
                sx={{ mt: 3, mb: 1 }} 
                label={"Encontre um Professor"} 
                error={messageErro.length > 0}
                helperText={messageErro}
                InputProps={{
                    startAdornment: <Icon sx={{ mr: 1 }}>search</Icon>
                }}
                onChange={({ target: { value }}) => setSearch(value)}
                fullWidth
                required
            />

            <BoxButtons>
                <Button type="submit" variant="contained">
                    Buscar o professor perfeito
                </Button>
            </BoxButtons>

        </HomeContainer>
    )
}