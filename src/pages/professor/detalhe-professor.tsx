import PageTitle from "@components/data-display/PageTitle";
import { Button, Container, Typography } from "@mui/material";
import { BoxCardProfessor, BoxDescription, BoxImage } from "@styles/pages/professor/detalhe-professor.stales";


export default function DetalheProfessorPage() {
    return (
        <Container>
            <PageTitle 
                title="Detalhe do professor"
                subtitle="Veja os detalhes do professor e verifique se ele é o ideal para você se candidatar a uma aula"
            />
            <BoxCardProfessor>
                <BoxImage foto={'https://github.com/kelleao.png'}/>
                <BoxDescription>
                    <div className="box_esquerda">
                        <Typography sx={{ my: 3 }} variant="h6">Nome</Typography>
                        <Typography sx={{ my: 2 }} className="descricao" paragraph variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod provident dicta dolores ratione, 
                            quaerat autem ea sunt, quos iste voluptates odit explicabo nisi dolorum officia numquam harum obcaecati fugit?
                        </Typography>
                    </div>
                    <div className="box_direita">
                        <Typography variant="body2" sx={{ my: 2 }}>PREÇO HORA/AULA</Typography>
                        <Typography variant="h4" paragraph>31/01/2023</Typography>
                        <Button variant="outlined" color="inherit" onClick={() => {}}>Contratar</Button>
                    </div>
                </BoxDescription>
            </BoxCardProfessor>
        </Container>
    )

}