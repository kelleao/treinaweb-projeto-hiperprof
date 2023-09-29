import axios, { AxiosError } from "axios";

export const ApiService = axios.create({
  baseURL: "https://alunos.treinaweb.com.br/hyperprof",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "pt-BR",
  },
});

ApiService.interceptors.response.use(
  (response) => {
    return response;
  },
  async (erro: AxiosError) => {
    if (erro.request.status === 401) {
      return await handleTokenRefrash(erro);
    }
    return Promise.reject(erro);
  }
);

async function handleTokenRefrash(erro: AxiosError) {
  try {
    const refreshToken = localStorage.getItem("refresh_token_hiperprof");
    await ApiService.post<{ token: string; refresh_token: string }>(
      "/api/auth/refresh",
      {
        refresh_token: refreshToken,
      }
    ).then(({ data }) => {
      localStorage.setItem("token_hiperprof", data.token);
      localStorage.setItem("refresh_token_hiperprof", data.refresh_token);
    });

    return await ApiService({
      ...erro.config,
      headers: {
        ...erro.config?.headers,
        Authorization: `Bearer ${localStorage.getItem("token_hiperprof")}`,
      },
    });
  } catch (error) {
    return Promise.reject(erro);
  }
}
