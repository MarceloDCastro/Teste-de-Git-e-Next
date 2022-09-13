import { List, ListItem, Typography, Button } from '@mui/material'
import { AxiosResponse } from 'axios'
import Link from 'next/link';
import { Title } from '../../components/Title'
import { api } from '../../services/api'

interface IUnidade {
  id: number;
  nomeUnidade: string;
  status: boolean;
}

export async function getServerSideProps () {
  const unidadesResponse: AxiosResponse<IUnidade[]> = await api.get('SisUnidade');
  const unidades = unidadesResponse.data
  return {
    props: {
      unidades
    }
  }
}

export default function Alunos({unidades}: {unidades: IUnidade[]}){
  console.log('unidades aqui: ',unidades)
  return (
    <>
      <Title>Unidades</Title>

      <Typography mt={3} fontWeight='bold'>Unidades by ServerSideProps</Typography>
      <List>
        {
          unidades?.map(({id, nomeUnidade, status}) => (
            <ListItem key={id}>
              <Typography>{nomeUnidade} [ {status ? 'Ativo' : 'Inativo'} ]</Typography>
              <Link href={`unidades/visualizar/${id}`}>
                <Button variant='contained' size='small' sx={{ ml: 2 }}>Visualizar</Button>
              </Link>
              <Link href={`unidades/editar/${id}`}>
                <Button variant='contained' size='small' sx={{ ml: 2 }}>Editar</Button>
              </Link>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}
