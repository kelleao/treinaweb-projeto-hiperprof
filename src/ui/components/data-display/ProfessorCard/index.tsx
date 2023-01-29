import { Button, Typography } from "@mui/material";
import { BoxAvatarStyled, BoxCardStyled, BoxContainsStyled, ImageStyled } from "./styles";

export default function ProfessorCard() {

    return (
        <BoxCardStyled>
            <BoxAvatarStyled>
                <ImageStyled src="https://github.com/kelleao.png" alt="" />
            </BoxAvatarStyled>
            <BoxContainsStyled>
                <div className="text-container">
                    <Typography 
                        variant="h6" 
                        className="descricao"
                        paragraph
                    >
                        Nome
                    </Typography>
                    <Typography 
                        sx={{ display: "flex", alignItems: "center" }}
                        className='descricao'
                        variant="body2" 
                        paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, exercitationem aperiam enim at ab quis nisi dolorem dignissimos delectus iure quo doloribus expedita voluptate dolore accusamus! Eveniet sunt voluptatem laborum!
                    </Typography>
                </div>
                <Button 
                    variant="outlined" 
                    color="inherit" 
                    onClick={() => {}}
                >
                    Ver detalhes
                </Button>
            </BoxContainsStyled>
        </BoxCardStyled>
    )

}