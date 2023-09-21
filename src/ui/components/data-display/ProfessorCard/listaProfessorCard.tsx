import ProfessorCard from ".";
import { BoxCarItemdStyled, ListStyled } from "./styles";

export interface ListaProfessorCarProps {
  professores: { id: number }[];
}

export default function ListaProfessorCard({
  professores,
}: ListaProfessorCarProps) {
  return (
    <ListStyled>
      {professores.map((professor) => {
        return (
          <BoxCarItemdStyled key={professor.id}>
            <ProfessorCard />;
          </BoxCarItemdStyled>
        );
      })}
    </ListStyled>
  );
}
