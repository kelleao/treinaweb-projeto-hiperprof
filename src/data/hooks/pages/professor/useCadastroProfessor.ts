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
import { TextFormatService } from "@data/services/TextFormatService";
import { Router } from "@routes/routes";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";

export default function useCadastroProfessor() {
  const [valuesCadastro, setValuesCadastro] = useState(
      {} as ProfessorCadastroInterface
    ),
    [valuesErroCadastro, setValuesErroCadastro] =
      useState<ProfessorErroInterface>(),
    [loading, setLoading] = useState(false),
    [snackMessage, setSnackMessage] = useState(""),
    router = useRouter(),
    { ProfessorDispatch, ProfessorState: professor } =
      useContext(ProfessorContext),
    [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setValuesCadastro({
      ...professor,
      valor_hora: TextFormatService.currency(professor?.valor_hora),
    } as ProfessorCadastroInterface);
  }, [professor]);

  async function saveFoto(files: FileList) {
    const foto = { foto: files[0] };
    ApiService.post("/api/professores/foto", foto, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token_hiperprof")}`,
      },
    })
      .then(({ data }: AxiosResponse<{ message: string }>) => {
        setSnackMessage(data.message);
        handleGetUser();
      })
      .catch(({ response }: AxiosError<{ message: string }>) => {
        if (response) {
          setSnackMessage(response!.data.message);
        }
      });
  }

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

      delete data.foto_perfil;

      const token = localStorage.getItem("token_hiperprof");

      const typeHttp = token ? ApiService.put : ApiService.post;

      await typeHttp("/api/professores", data, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
        .then(async () => {
          await handleLogin();
          if (!token) {
            setSnackMessage("Professor cadastrado com sucesso");
            Router.listaDeAlunos.push(router);
          }
          token && setSnackMessage("Professor editado com sucesso");
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

  async function deleteAccount() {
    if (!loading) {
      setLoading(true);
      ApiService.delete("/api/professores", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_hiperprof")}`,
        },
      })
        .then(() => {
          ProfessorDispatch(undefined);
          localStorage.removeItem("token_hiperprof");
          localStorage.removeItem("refresh_token");
          Router.home.push(router);
        })
        .catch(({ response }: AxiosError<{ message: string }>) => {
          if (response) {
            setSnackMessage(response.data.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return {
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
  };
}
