import { AlunoErroResponseInterface, AlunosInterface } from "@data/@types/alunos";
import { ResponseErroInterface } from "@data/@types/axios_response";
import { ProfessorInterface } from "@data/@types/professor";
import { ApiService } from "@data/services/ApiService";
import { BrowserService } from "@data/services/BrowserService";
import { Router } from "@routes/routes";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useDetalheProfessor() {

    const router = useRouter(), 
        [professor, setProfessor] = useState<ProfessorInterface>(),
        [professores, setProfessores] = useState<ProfessorInterface[]>(),
        [openDialog, setOpenDialog] = useState<boolean>(false),
        [aluno, setAluno] = useState<AlunosInterface>({nome: '', email: '', data_aula: ''}),
        [snackMessage, setSnackMessage] = useState(''),
        [alunoErro, setAlunoErro] = useState<AlunoErroResponseInterface>();


    useEffect(() => {
        const data = sessionStorage.getItem('hiperprof_professor');

        if(data) {
            setProfessor(JSON.parse(data));
            getProfessores();
        }else {
            Router.home.push(router);
        }

        // return () => {
        //     sessionStorage.removeItem('hiperprof_professor');
        // };

    }, []);

    async function getProfessores() {
        await ApiService.get('/api/professores', { 
            params: router.query.search 
        }).then(({ data }: AxiosResponse<ProfessorInterface[]>) => {
            setProfessores(data);
        }).catch(() => setProfessores([]));
    }

    function selecionarProfessor(professor: ProfessorInterface) {
        setProfessor(professor);
        sessionStorage.setItem('hiperprof_professor', JSON.stringify(professor));
        BrowserService.scrolToTop();
    }

    function formatDataToJson(data: string): Date {
        const [_data, tempo] = data.split(' '),
            [dia, mes, ano] = _data.split('/'),
            [hora, minuto] = tempo?.split(':') ?? [];
        
        const newDate = new Date(`${mes} ${dia} ${ano} ${hora}:${minuto} UTC`);
        return newDate;

    }

    async function handleSubmit() {
        const newDate = {
            ...aluno,
            data_aula: formatDataToJson(aluno.data_aula as string),
        } as AlunosInterface;

        ApiService.post(`/api/professores/${professor!.id}/alunos`, newDate)
            .then(
                () => {
                    setOpenDialog(false);
                    setAluno({ data_aula: '', email: '', nome: ''});
                    setSnackMessage('Agendado com sucesso');
                })
            .catch(({ response }: AxiosError<ResponseErroInterface<AlunoErroResponseInterface>>) => {
                if(response) {
                    setAlunoErro(response.data.errors);
                    setSnackMessage(response.data.message);
                }
            });
    }

    return {
        professor,
        selecionarProfessor,
        professores,
        openDialog, 
        setOpenDialog,
        setAluno,
        handleSubmit,
        snackMessage, 
        setSnackMessage,
        alunoErro,
        setAlunoErro,
    };
}