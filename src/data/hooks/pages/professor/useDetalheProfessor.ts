import { ProfessorInterface } from "@data/@types/professor";
import { ApiService } from "@data/services/ApiService";
import { BrowserService } from "@data/services/BrowserService";
import { Router } from "@routes/routes";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useDetalheProfessor() {
  const router = useRouter(),
    [professor, setProfessor] = useState<ProfessorInterface>(),
    [professores, setProfessores] = useState<ProfessorInterface[]>();

  useEffect(() => {
    const data = sessionStorage.getItem("hiperprof_professor");

    if (data) {
      setProfessor(JSON.parse(data));
      getProfessores();
    } else {
      Router.home.push(router);
    }

    // return () => {
    //   sessionStorage.removeItem("hiperprof_professor");
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getProfessores() {
    await ApiService.get("/api/professores", {
      params: router.query.search,
    })
      .then(({ data }: AxiosResponse<ProfessorInterface[]>) => {
        setProfessores(data);
      })
      .catch(() => setProfessores([]));
  }

  function selecionarProfessor(professor: ProfessorInterface) {
    setProfessor(professor);
    sessionStorage.setItem("hiperprof_professor", JSON.stringify(professor));
    BrowserService.scrolToTop();
  }

  return { professor, professores, selecionarProfessor };
}
