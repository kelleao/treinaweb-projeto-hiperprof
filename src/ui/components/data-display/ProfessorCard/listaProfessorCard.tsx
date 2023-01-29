import ProfessorCard from ".";
import { BoxCardItemStyled, ListaStyled } from "./styles";

export interface ListaProfessorCardProps{
    professores: { id: number }[];
}

export default function ListaProfessorCard({
    professores,
}: ListaProfessorCardProps) {
    return (
        <ListaStyled>
            {
                professores.map((professor) => {
                    return (
                        <BoxCardItemStyled key={professor.id}>
                            <ProfessorCard />
                        </BoxCardItemStyled>
                    )
                })
            }

        </ListaStyled>
    
    )

    
}