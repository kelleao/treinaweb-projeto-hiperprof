import { ProfessorInterface } from "@data/@types/professor";
import { ApiService } from "@data/services/ApiService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Router } from "@routes/routes";

export default function usePesquisaProfessor() {
  const router = useRouter(),
    [search, setSearch] = useState<string>(router.query.search as string),
    [professores, setProfessores] = useState<ProfessorInterface[]>(),
    [timeOutRef, setTimeOutRef] = useState<NodeJS.Timeout>();

  useEffect(() => {
    ApiService.get("/api/professores", {
      params: { q: search },
    })
      .then(({ data }: AxiosResponse<ProfessorInterface[]>) => {
        setProfessores(data);
      })
      .catch(() => setProfessores([]));
  }, [search]);

  function onSearch(value: string) {
    clearTimeout(timeOutRef);
    const time = setTimeout(() => {
      setSearch(value);
    }, 2000);

    setTimeOutRef(time);

    Router.pesquisaProfessor.push(router, value);
  }

  return { professores, onSearch };
}
