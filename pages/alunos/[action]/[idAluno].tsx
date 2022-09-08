import { TextField, Stack } from '@mui/material'
import { AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next';
import Error from 'next/error';
import { Title } from '../../../components/Title'
import { api } from '../../../services/api'

interface IAluno {
  id: number;
  nome: string;
  genero: string;
  dataNascimento: Date;
}

interface IPageProps {
  action: string;
  aluno?: IAluno;
  error?: {
    errorCode: number;
  }
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let props: IPageProps = { action: query.action as string }
  const alunoId = query.idAluno;
  const alunoResponse: AxiosResponse<IAluno> = await api.get(`Aluno/${alunoId}`);
  const aluno = alunoResponse.data;

  if(aluno) {
    props.aluno = aluno;
  } else {
    props.error = {
      errorCode: 404
    }
  }
  
  return { props }
}

export default function Alunos({action, aluno, error}: IPageProps){
  if(error || !aluno) return <Error statusCode={error?.errorCode || 404} />
  console.log('aluno -> ', aluno)

  return (
    <>
      <Title>{`${action} aluno`}</Title>

      <Stack direction='row' spacing={2} sx={{ flexWrap: 'wrap' }}>
        <TextField label='Id' value={aluno?.id} disabled />
        <TextField label='Nome' value={aluno?.nome} disabled />
        <TextField label='Unidade' value={aluno?.genero} disabled />
        <TextField label='Curso' value={aluno?.dataNascimento} disabled />
      </Stack>
    </>
  )
}
