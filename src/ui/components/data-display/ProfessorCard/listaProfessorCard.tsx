import { ProfessorInterface } from "@data/@types/professor";
import ProfessorCard from ".";
import { BoxCardItemStyled, ListaStyled } from "./styles";

export interface ListaProfessorCardProps{
    professores: ProfessorInterface[];
    onClick: (professor: ProfessorInterface) => void;
}

export default function ListaProfessorCard({
    professores,
    onClick
}: ListaProfessorCardProps) {
    return (
        <ListaStyled>
            {
                professores.map((professor) => {
                    return (
                        <BoxCardItemStyled key={professor.id}>
                            <ProfessorCard professor={professor} onClick={onClick} />
                        </BoxCardItemStyled>
                    )
                })
            }

        </ListaStyled>
    
    )

    
}