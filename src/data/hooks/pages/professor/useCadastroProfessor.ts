import { ResponseErroInterface } from "@data/@types/axios_response";
import { LoginInterface, ResponseLoginInterface } from "@data/@types/login";
import {
  ProfessorCadastroInterface,
  ProfessorErroInterface,
} from "@data/@types/professor";
import { ProfessorContext } from "@data/contexts/ProfessorContext";
import { ApiService } from "@data/services/ApiService";
import { FormSchemaService } from "@data/services/FormSchemaService";
import { getUser } from "@data/services/MeService";
import { Router } from "@routes/routes";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

export default function useCadastroProfessor() {
  const [valuesCadastro, setValuesCadastro] = useState(
      {} as ProfessorCadastroInterface
    ),
    [valuesErroCadastro, setValuesErroCadastro] =
      useState<ProfessorErroInterface>(),
    [loading, setLoading] = useState(false),
    [snackMessage, setSnackMessage] = useState(""),
    router = useRouter(),
    { ProfessorDispatch, ProfessorState } = useContext(ProfessorContext);

  async function handleSubmit() {
    const formValidate = FormSchemaService.cadastroProfessor(valuesCadastro);
    setValuesErroCadastro(formValidate);
    const invalid = Object.keys(formValidate).length === 0;

    if (invalid && !loading) {
      setLoading(true);
      const data = {
        ...valuesCadastro,
        valor_hora: Number(
          (valuesCadastro.valor_hora as string)
            .replace("R$", "")
            .replace(",", ".")
        ),
      } as ProfessorCadastroInterface;

      await ApiService.post("/api/professores", data)
        .then(async () => {
          setSnackMessage("Professor cadastrado com sucesso");
          handleLogin();
          Router.listaDeAlunos.push(router);
        })
        .catch(
          ({
            response,
          }: AxiosError<ResponseErroInterface<ProfessorErroInterface>>) => {
            if (response) {
              const { message, errors } = response.data;
              setValuesErroCadastro(errors);
              setSnackMessage(message);
            }
          }
        )
        .finally(() => setLoading(false));
    }
  }

  async function handleLogin() {
    setLoading(true);
    ApiService.post("/api/auth/login", {
      email: valuesCadastro.email,
      password: valuesCadastro.password,
    } as LoginInterface)
      .then(async ({ data }: AxiosResponse<ResponseLoginInterface>) => {
        localStorage.setItem("token_hiperprof", data.token);
        localStorage.setItem("refresh_token", data.refresh_token);
        await handleGetUser();
      })
      .catch(() => Router.login.push(router))
      .finally(() => setLoading(false));
  }

  async function handleGetUser() {
    await getUser()
      .then(({ data }) => ProfessorDispatch(data))
      .catch(({ response }) => {
        setSnackMessage(
          response?.data.message ??
            "Erro inesperado ao tentar buscar usuário logado"
        );
      });
  }

  return {
    valuesCadastro,
    valuesErroCadastro,
    snackMessage,
    setSnackMessage,
    setValuesCadastro,
    handleSubmit,
    loading,
  };
}
