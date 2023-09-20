import { Router } from "@routes/routes";
import { useRouter } from "next/router";
import { useState } from "react";

export default function useIndex() {
  const router = useRouter(),
    [search, setSearch] = useState(""),
    [messageErro, setMessageErro] = useState<string>("");

  function onBuscarProfessor(event: FormEvent) {
    event.preventDefault();
    if (search.length >= 3) {
      Router.pesquisaProfessor.push(router, search);
    } else {
      setMessageErro("minimo de três caracteres");
    }
  }

  return { setSearch, messageErro, onBuscarProfessor };
}
