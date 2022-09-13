import { List, ListItem, Typography, Button } from '@mui/material'
import { AxiosResponse } from 'axios'
import Link from 'next/link';
import { Title } from '../../components/Title'
import { api } from '../../services/api'

interface IAluno {
  idAluno: number;
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
      <Title>Alunos</Title>

      <Typography mt={3} fontWeight='bold'>Alunos by ServerSideProps</Typography>
      <List>
        {
          alunos?.map(({idAluno, nomeAluno, sisStatusMatricula}) => (
            <ListItem key={idAluno}>
              <Typography>{nomeAluno} | Matrícula {sisStatusMatricula}</Typography>
              <Link href={`alunos/visualizar/${idAluno}`}>
                <Button variant='contained' size='small' sx={{ ml: 2 }}>Visualizar</Button>
              </Link>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}
