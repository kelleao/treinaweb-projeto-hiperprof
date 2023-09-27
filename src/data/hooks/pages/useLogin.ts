import { ResponseErroInterface } from "@data/@types/axios_response";
import {
  LoginErroInterface,
  LoginInterface,
  ResponseLoginInterface,
} from "@data/@types/login";
import { ApiService } from "@data/services/ApiService";
import { Router } from "@routes/routes";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useState, FormEvent } from "react";

export default function useLogin() {
  const [valueLogin, setValuesLogin] = useState<LoginInterface>(
      {} as LoginInterface
    ),
    [messageErro, setMessageErro] = useState<LoginErroInterface>(),
    [loading, setLoading] = useState(false),
    [snackMessage, setSnackMessage] = useState(""),
    router = useRouter();

  function handlelogin(event: FormEvent) {
    event.preventDefault();
    if (!loading) {
      setLoading(true);
      ApiService.post("/api/auth/login", valueLogin)
        .then(({ data }: AxiosResponse<ResponseLoginInterface>) => {
          localStorage.setItem("token_hiperprof", data.token);
          localStorage.setItem("refresh_token_hiperprof", data.refresh_token);
          Router.listaDeAlunos.push(router);
        })
        .catch(
          ({
            response,
          }: AxiosError<ResponseErroInterface<LoginErroInterface>>) => {
            if (response) {
              const { message, errors } = response.data;
              setMessageErro(errors);
              setSnackMessage(message ?? "");
            }
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return {
    setValuesLogin,
    messageErro,
    handlelogin,
    loading,
    snackMessage,
    setSnackMessage,
  };
}
