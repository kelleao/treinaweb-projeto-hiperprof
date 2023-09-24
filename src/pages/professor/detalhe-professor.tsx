import useDetalheProfessor from "@data/hooks/pages/professor/useDetalheProfessor";
import { TextFormatService } from "@data/services/TextFormatService";
import {
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Fetch from "ui/components/data-display/Fetch";
import PageTitle from "ui/components/data-display/PageTile";
import ListaProfessorCard from "ui/components/data-display/ProfessorCard/listaProfessorCard";
import Dialog from "ui/components/feedback/Dialog";
import {
  BoxCardProfessor,
  BoxDescription,
  BoxImage,
} from "ui/styles/pages/professor/detalhe-professor.styles";
import InputMask from "react-input-mask";

export default function DetalheProfessorPage() {
  const {
    professor,
    professores,
    selecionarProfessor,
    openDialog,
    setOpenDialog,
    setAluno,
    handleSutmit,
    snackMessage,
    setSnackMessage,
    alunoErro,
    setAlunoErro,
  } = useDetalheProfessor();

  return (
    <Container>
      <PageTitle
        title="Detalhes do professor"
        subtitle="Veja os detalhes do professor e verifique se ele é o ideal para você se candidatar a uma aula"
      />
      <BoxCardProfessor>
        <BoxImage foto={professor?.foto_perfil} />
        <BoxDescription>
          <div className="box_esquerda">
            <Typography variant="h6">{professor?.nome}</Typography>
            <Typography
              sx={{ my: 2 }}
              className="descricao"
              paragraph
              variant="body2"
            >
              {professor?.descricao}
            </Typography>
          </div>
          <div className="box_direita">
            <Typography variant="body2" sx={{ my: 2 }}>
              PREÇO HORA/AULA
            </Typography>
            <Typography variant="h4" paragraph>
              {TextFormatService.currency(professor?.valor_hora)}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpenDialog(true)}
            >
              Contratar
            </Button>
          </div>
        </BoxDescription>
      </BoxCardProfessor>
      <Typography variant="body2" color={"grey"} sx={{ my: 10 }}>
        {professor?.descricao}
      </Typography>
      <Fetch
        data={professores?.filter(({ id }) => id !== professor?.id)}
        maxLength={3}
        render={(professoresFiltrado) => {
          return (
            <>
              <PageTitle
                title="OUTROS PROFESSORES SUGERIDOS"
                color={"primary.light"}
              />

              <ListaProfessorCard
                professores={professoresFiltrado}
                onclick={selecionarProfessor}
              />
            </>
          );
        }}
      />
      <Dialog
        isOpen={openDialog}
        title="Preencha suas informações"
        onConfirm={handleSutmit}
        onClose={() => {
          setOpenDialog(false);
          setAlunoErro(undefined);
        }}
      >
        <TextField
          label={"Seu nome"}
          error={alunoErro?.nome != undefined}
          helperText={alunoErro?.nome}
          onChange={({ target: { value } }) => {
            setAluno((prevState) => {
              return { ...prevState, nome: value };
            });
          }}
          fullWidth
        />
        <TextField
          label={"Seu E-mail"}
          error={alunoErro?.email != undefined}
          helperText={alunoErro?.email}
          type={"email"}
          sx={{ my: 3 }}
          onChange={({ target: { value } }) => {
            setAluno((prevState) => {
              return { ...prevState, email: value };
            });
          }}
          fullWidth
        />
        <InputMask
          mask={"99/99/9999 99:99"}
          onChange={({ target: { value } }: any) => {
            setAluno((prevState) => {
              return { ...prevState, data_aula: value };
            });
          }}
        >
          {() => {
            return (
              <TextField
                label={"Horário da aula"}
                error={alunoErro?.data_aula != undefined}
                helperText={alunoErro?.data_aula as string}
                fullWidth
              />
            );
          }}
        </InputMask>
      </Dialog>
      <Snackbar
        open={snackMessage.length > 0}
        message={snackMessage}
        autoHideDuration={4000}
        onClose={() => {
          setSnackMessage("");
        }}
      />
    </Container>
  );
}
