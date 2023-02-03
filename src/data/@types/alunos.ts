export interface AlunosInterface {
    id?: number;
    nome: string;
    email: string;
    data_aula: string | Date;
}

export interface AlunoErroResponseInterface extends AlunosInterface {

}