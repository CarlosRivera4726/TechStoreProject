import useSWR from 'swr'
import axios from "axios"
import { IProduct } from '@interfaces/product.interface';
import CardComponent from '@components/Card.component';
import { EnvironmentVariables } from '@config/environment.variables.config';

const fetcher = (url: string) => axios.get(url).then(res => res.data).catch(err => err)


function App() {
  // const path = useLocation();
  const variables = new EnvironmentVariables();
  const { data, error, isLoading } = useSWR(`${variables.API_URL}/products`, fetcher)

  console.log({
    data,
    error,
    isLoading
  })

  return (
    <>
      <div>
        {data && (
          data.map((product: IProduct) => {
            <CardComponent product={product} />
          })
        )}
      </div>
    </>
  )
}

export default App
