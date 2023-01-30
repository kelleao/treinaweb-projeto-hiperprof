import { ProfessorInterface } from "@data/@types/professor";
import { Button, Typography } from "@mui/material";
import { BoxAvatarStyled, BoxContainsStyled, ImageStyled } from "./styles";

export interface ProfessorCardProps {
    professor: ProfessorInterface;
    onClick: (professor: ProfessorInterface) => void;
}

export default function ProfessorCard({ professor, onClick }: ProfessorCardProps) {

    return (
        <>
            <BoxAvatarStyled>
                {professor.foto_perfil ? (
                    <ImageStyled src={professor.foto_perfil!} alt="" />

                ) : (
                    <ImageStyled src={'/user.svg'} alt="" style={{ width: "50%" }}/>
                )}

            </BoxAvatarStyled>
            <BoxContainsStyled>
                <div className="text-container">
                    <Typography 
                        variant="h6" 
                        className="descricao"
                        paragraph
                    >
                        {professor.nome}
                    </Typography>
                    <Typography 
                        sx={{ display: "flex", alignItems: "center" }}
                        className='descricao'
                        variant="body2" 
                        paragraph>
                            {professor.descricao}
                    </Typography>
                </div>
                <Button 
                    variant="outlined" 
                    color="inherit" 
                    onClick={() => onClick(professor)}
                >
                    Ver detalhes
                </Button>
            </BoxContainsStyled>
        </>
    )

}