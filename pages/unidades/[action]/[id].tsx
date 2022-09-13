import { TextField, Stack, Switch } from '@mui/material'
import { AxiosResponse } from 'axios'
import Error from 'next/error';
import { GetStaticProps } from 'next/types';
import { Title } from '../../../components/Title'
import { api } from '../../../services/api'

type Actions = 'visualizar'|'editar';
const actions: Actions[] = ['visualizar', 'editar'];

interface IUnidade {
  id: number;
  nomeUnidade: string;
  status: boolean;
}

interface IStaticProps {
  action: Actions;
  id: string;
}

interface IPathProps {
  params: IStaticProps
}

interface IPageProps {
  action: Actions,
  unidade: IUnidade,
  error?: {
    errorCode: number;
  }
}

export async function getStaticPaths(){
  const unidadesResponse: AxiosResponse<IUnidade[]> = await api.get('sisUnidade');
  const unidades = unidadesResponse.data;
  if (!unidades) return;

  const paths: IPathProps[] = [];
  unidades.forEach(unidade => {
    actions.forEach(action => {
      paths.push({
        params: {
          action: action,
          id: unidade.id.toString()
        }
      })
    })
  })

  console.log('paths: ', paths)

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const action = context.params?.action;
  const id = context.params?.id;
  const unidadeResponse = await api.get(`SisUnidade/${id}`);
  const unidade = unidadeResponse.data;

  return {
    props: { action, unidade }
  }
}

export default function Alunos({action, unidade}: IPageProps){
  if(!unidade) return <Error statusCode={404} />

  return (
    <>
      <Title>{`${action.charAt(0).toUpperCase() + action.slice(1)} aluno`}</Title>

      <Stack direction='row' spacing={2} sx={{ flexWrap: 'wrap' }}>
        <TextField label='Id' value={unidade.id} disabled />
        <TextField label='Unidade' value={unidade.nomeUnidade} disabled />
        <Switch checked={unidade.status} disabled />
      </Stack>
    </>
  )
}
