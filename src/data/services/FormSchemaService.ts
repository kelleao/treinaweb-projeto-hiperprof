import {
  ProfessorCadastroInterface,
  ProfessorErroInterface,
} from "@data/@types/professor";
import { BrowserService } from "./BrowserService";

export const FormSchemaService = {
  cadastroProfessor(
    professor: ProfessorCadastroInterface
  ): ProfessorErroInterface {
    const formValidate = {} as ProfessorErroInterface;

    // if (!professor.nome) {
    //   formValidate.nome = "Campo obrigatório";
    //   BrowserService.scrolToTop();
    // } else if (!professor.idade) {
    //   formValidate.idade = "Campo obrigatório";
    //   BrowserService.scrolToTop();
    // } else if (!professor.valor_hora) {
    //   formValidate.valor_hora = "Campo obrigatório";
    //   BrowserService.scrolToTop();
    // } else if (!professor.descricao) {
    //   formValidate.descricao = "Campo obrigatório";
    //   BrowserService.scrolToTop();
    // } else if (!professor.email?.includes("@")) {
    //   formValidate.email = "Campo obrigatório";
    //   if (!professor.email || !professor.email.includes("@")) {
    //     formValidate.email = "Email inválido";
    //   }
    // }

    if (professor.password && professor.password_confirmation) {
      if (professor.password != professor.password_confirmation) {
        formValidate.password = "As senhas são diferentes";
        formValidate.password_confirmation = "As senhas são diferentes";
      }
    }

    return formValidate;
  },
};
