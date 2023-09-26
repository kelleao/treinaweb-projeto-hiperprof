import useCadastroProfessor from "@data/hooks/pages/professor/useCadastroProfessor";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Snackbar,
  TextField,
} from "@mui/material";
import { BoxButtons } from "@styles/pages/professor/cadastro-professor.styles";
import PageTitle from "ui/components/data-display/PageTile";
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
  } = useCadastroProfessor();

  return (
    <>
      <PageTitle title="CADASTRAR DADOS" />
      <Box sx={{ maxWidth: "md", mx: "auto", my: 3 }}>
        <Card sx={{ p: 3 }}>
          <TextField
            label={"Nome"}
            error={valuesErroCadastro?.nome != undefined}
            helperText={valuesErroCadastro?.nome}
            sx={{ my: 2 }}
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
          <Button variant="contained" onClick={handleSubmit} fullWidth>
            {!loading ? "Cadastrar" : <CircularProgress color="primary" />}
          </Button>
        </BoxButtons>
      </Box>
      <Snackbar
        open={snackMessage.length > 0}
        message={snackMessage}
        autoHideDuration={4000}
        onClose={() => setSnackMessage("")}
      />
    </>
  );
}
