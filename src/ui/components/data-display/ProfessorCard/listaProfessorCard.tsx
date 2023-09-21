import { ProfessorInterface } from "@data/@types/professor";
import ProfessorCard from ".";
import { BoxCarItemdStyled, ListStyled } from "./styles";

export interface ListaProfessorCarProps {
  professores: ProfessorInterface[];
  onclick: (professor: ProfessorInterface) => void;
}

export default function ListaProfessorCard({
  professores,
  onclick,
}: ListaProfessorCarProps) {
  return (
    <ListStyled>
      {professores.map((professor) => {
        return (
          <BoxCarItemdStyled key={professor.id}>
            <ProfessorCard professor={professor} onclick={onclick} />;
          </BoxCarItemdStyled>
        );
      })}
    </ListStyled>
  );
}
