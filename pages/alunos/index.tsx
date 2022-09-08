import { List, ListItem, Typography } from '@mui/material'
import { AxiosResponse } from 'axios'
import { Title } from '../../components/Title'
import { api } from '../../services/api'

interface IAluno {
  id: number;
  nomeAluno: string;
  sisStatusMatricula: string;
}

export async function getServerSideProps () {
  console.log('buscando')
  const alunosResponse: AxiosResponse<{items: IAluno[]}> = await api.get('GestaoProcesso?SkipCount=0&MaxResultCount=5');
  const alunos = alunosResponse.data.items
  return {
    props: {
      alunos
    }
  }
}

export default function Alunos({alunos}: {alunos: IAluno[]}){
  console.log('alunos aqui: ',alunos)
  return (
    <>
      <Title>Teste</Title>

      <Typography mt={3} fontWeight='bold'>Alunos by ServerSideProps</Typography>
      <List>
        {
          alunos?.map(({id, nomeAluno, sisStatusMatricula}) => (
            <ListItem key={id}>
              <Typography>{nomeAluno} | Matrícula {sisStatusMatricula}</Typography>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}
