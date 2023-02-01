import Fetch from "@components/data-display/Fetch";
import PageTitle from "@components/data-display/PageTitle";
import ListaProfessorCard from "@components/data-display/ProfessorCard/listaProfessorCard";
import useDetalheProfessor from "@data/hooks/pages/professor/useDetalheProfessor";
import { TextFormatService } from "@data/services/TextFormatService";
import { Button, Container, Typography } from "@mui/material";
import { BoxCardProfessor, BoxDescription, BoxImage } from "@styles/pages/professor/detalhe-professor.stales";


export default function DetalheProfessorPage() {
    const {professor, selecionarProfessor, professores} = useDetalheProfessor();

    return (
        <Container>
            <PageTitle 
                title="Detalhe do professor"
                subtitle="Veja os detalhes do professor e verifique se ele é o ideal para você se candidatar a uma aula"
            />
            <BoxCardProfessor>
                <BoxImage foto={professor?.foto_perfil}/>
                <BoxDescription>
                    <div className="box_esquerda">
                        <Typography sx={{ my: 3 }} variant="h6">{professor?.nome}</Typography>
                        <Typography sx={{ my: 2 }} className="descricao" paragraph variant="body2">
                            {professor?.descricao}
                        </Typography>
                    </div>
                    <div className="box_direita">
                        <Typography variant="body2" sx={{ my: 2 }}>PREÇO HORA/AULA</Typography>
                        <Typography variant="h4" paragraph>{TextFormatService.currency(professor?.valor_hora) }</Typography>
                        <Button variant="outlined" color="inherit" onClick={() => {}}>Contratar</Button>
                    </div>
                </BoxDescription>
            </BoxCardProfessor>
            <Typography variant="body2" color={'grey'} sx={{ my: 10 }}>{professor?.descricao}</Typography>

            <Fetch 
                data={professores?.filter(({ id }) => id !== professor?.id)}
                mensage={'Nenhum professor encontrado'}
                maxLength={3}
                render={(professoresFiltrado) => {
                    return (
                        <>
                            <PageTitle 
                                title="OUTROS PROFESSORES SUGERIDOS"
                                color={'primary.light'}
                            />
                            <ListaProfessorCard  
                                professores={professoresFiltrado} 
                                onClick={selecionarProfessor}
                            />                  
                        </>
                    )
                }}
            />
        </Container>
    )

}