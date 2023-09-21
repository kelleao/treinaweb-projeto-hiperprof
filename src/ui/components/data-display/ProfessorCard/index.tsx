import { Button, Typography } from "@mui/material";
import { BoxAvatarStyled, BoxContainsStyled, ImageStyled } from "./styles";

export default function ProfessorCard() {
  return (
    <>
      <BoxAvatarStyled>
        <ImageStyled src="https://github.com/kelleao.png" alt="" />
      </BoxAvatarStyled>
      <BoxContainsStyled>
        <div className="text-container">
          <Typography variant="h6" className="descricao" paragraph>
            Nome
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            className="descricao"
            variant="body2"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            velit quisquam perspiciatis atque consectetur, perferendis ex ipsa
            dicta amet nostrum voluptatibus rerum? Laboriosam, voluptatum velit
            nostrum aliquam qui molestias voluptatibus.
          </Typography>
        </div>
        <Button variant="outlined" color="inherit" onClick={() => {}}>
          Ver detalhes
        </Button>
      </BoxContainsStyled>
    </>
  );
}
