import { ProfessorInterface } from "@data/@types/professor";
import useCadastroProfessor from "@data/hooks/pages/professor/useCadastroProfessor";
import {
  Avatar,
  Box,
  Button,
  Card,
  CircularProgress,
  Icon,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import {
  BoxAvatar,
  BoxButtons,
} from "@styles/pages/professor/cadastro-professor.styles";
import PageTitle from "ui/components/data-display/PageTile";
import Dialog from "ui/components/feedback/Dialog";
import ButtonFile from "ui/components/inputs/ButtonFile";
import CurrencynputMask from "ui/components/inputs/CurrencyInputMask";

export default function CadastroProfessorPage() {
  const {
    valuesCadastro,
    valuesErroCadastro,
    snackMessage,
    setSnackMessage,
    setValuesCadastro,
    handleSubmit,
    loading,
    professor,
    saveFoto,
    openDialog,
    setOpenDialog,
    deleteAccount,
  } = useCadastroProfessor();

  return (
    <>
      {professor?.id && (
        <BoxAvatar>
          <ButtonFile onChange={saveFoto}>
            <Avatar src={professor.foto_perfil}>
              {Object.hasOwn(professor, "nome") && professor.nome[0]}
            </Avatar>
            <div className="boxIcon">
              <Icon>add_a_photo</Icon>
            </div>
          </ButtonFile>
        </BoxAvatar>
      )}
      <PageTitle
        title={professor?.id ? "Editar professor" : "Cadastrar professor"}
      />
      <Box sx={{ maxWidth: "md", mx: "auto", my: 3 }}>
        <Card sx={{ p: 3 }}>
          <TextField
            label={"Nome"}
            error={valuesErroCadastro?.nome != undefined}
            helperText={valuesErroCadastro?.nome}
            sx={{ my: 2 }}
            value={valuesCadastro?.nome ?? ""}
            onChange={({ target: { value } }) => {
              setValuesCadastro((prevState) => ({ ...prevState, nome: value }));
            }}
            fullWidth
          />
          <TextField
            label={"Idade"}
            type={"number"}
            error={valuesErroCadastro?.idade != undefined}
            helperText={valuesErroCadastro?.idade}
            value={valuesCadastro?.idade ?? ""}
            sx={{ my: 2 }}
            onChange={({ target: { value } }) => {
              setValuesCadastro((prevState) => ({
                ...prevState,
                idade: Number(value),
              }));
            }}
            fullWidth
          />
          <CurrencynputMask
            label={"Valor por aula"}
            error={valuesErroCadastro?.valor_hora != undefined}
            helperText={valuesErroCadastro?.valor_hora}
            value={valuesCadastro?.valor_hora ?? ""}
            sx={{ my: 2 }}
            onChange={({ target: { value } }) => {
              setValuesCadastro((prevState) => ({
                ...prevState,
                valor_hora: value,
              }));
            }}
            fullWidth
          />
          <TextField
            label={"Descrição"}
            rows={4}
            error={valuesErroCadastro?.descricao != undefined}
            helperText={valuesErroCadastro?.descricao}
            value={valuesCadastro?.descricao ?? ""}
            sx={{ my: 2 }}
            onChange={({ target: { value } }) => {
              setValuesCadastro((prevState) => ({
                ...prevState,
                descricao: value,
              }));
            }}
            multiline
            fullWidth
          />
        </Card>
        <Card sx={{ p: 3, my: 5 }}>
          <TextField
            label={"Email"}
            type={"email"}
            error={valuesErroCadastro?.email != undefined}
            helperText={valuesErroCadastro?.email}
            value={valuesCadastro?.email ?? ""}
            sx={{ my: 2 }}
            onChange={({ target: { value } }) => {
              setValuesCadastro((prevState) => ({
                ...prevState,
                email: value,
              }));
            }}
            fullWidth
          />
          <TextField
            label={"Senha"}
            type={"password"}
            error={valuesErroCadastro?.password != undefined}
            helperText={valuesErroCadastro?.password}
            sx={{ my: 2 }}
            onChange={({ target: { value } }) => {
              setValuesCadastro((prevState) => ({
                ...prevState,
                password: value,
              }));
            }}
            fullWidth
          />
          <TextField
            label={"Confirmar senha"}
            type={"password"}
            error={valuesErroCadastro?.password_confirmation != undefined}
            helperText={valuesErroCadastro?.password_confirmation}
            sx={{ my: 2 }}
            onChange={({ target: { value } }) => {
              setValuesCadastro((prevState) => ({
                ...prevState,
                password_confirmation: value,
              }));
            }}
            fullWidth
          />
        </Card>
        <BoxButtons>
          <ButtonSubmit
            professor={professor}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </BoxButtons>
        {professor?.id && (
          <>
            <Typography
              variant="body2"
              color={"gray"}
              textAlign={"center"}
              sx={{ my: 5 }}
            >
              Você pode apagar sua conta, desse modo não será mais exibida na
              plataforma.
            </Typography>
            <BoxButtons>
              <Button
                color="error"
                variant="outlined"
                onClick={() => {
                  setOpenDialog(true);
                }}
                fullWidth
              >
                {loading ? (
                  <CircularProgress color="primary" />
                ) : (
                  "Apagar minha conta"
                )}
              </Button>
            </BoxButtons>
          </>
        )}
      </Box>
      <Snackbar
        open={snackMessage.length > 0}
        message={snackMessage}
        autoHideDuration={4000}
        onClose={() => setSnackMessage("")}
      />
      <Dialog
        isOpen={openDialog}
        title="Tem certeza que deseja excluir?"
        onConfirm={deleteAccount}
        onClose={() => setOpenDialog(false)}
        onCancel={() => setOpenDialog(false)}
      />
    </>
  );
}

interface ButtonSubmitProps {
  professor?: ProfessorInterface;
  handleSubmit: () => void;
  loading: boolean;
}

function ButtonSubmit({ handleSubmit, professor, loading }: ButtonSubmitProps) {
  if (loading) {
    <CircularProgress color="primary" />;
  }
  return (
    <Button variant="contained" onClick={handleSubmit} fullWidth>
      {professor?.id ? "Editar" : "Cadastrar"}
    </Button>
  );
}
