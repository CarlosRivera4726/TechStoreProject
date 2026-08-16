import useSWR from 'swr'
import axios from "axios"
import { IProduct } from '@interfaces/product.interface';
import CardComponent from '@components/Card.component';
import { EnvironmentVariables } from '@config/environment.variables.config';
import { useEffect, useState } from 'react';
import jsonProducts from '../../data/products.json'

const fetcher = (url: string) => axios.get(url).then(res => res.data)


function App() {
  // const path = useLocation();
  const variables = new EnvironmentVariables();
  const [products, setProducts] = useState<IProduct[] | null>(null);

  const { data, error, isLoading } = useSWR(`${variables.API_URL}/products`, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.message === 'Network Error') return
      if (error.status === 404) return;
      // Only retry up to 10 times.
      if (retryCount >= 10) return;
      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount }), 5000)
    },
    onError: (error, key) => {
      if (error.message === 'Network Error' || error.status === 404) {
        alert("no se ha podido comunicar con la bd, temporalmente desconectada y se va a usar datos locales")
        setProducts(jsonProducts)
      }
    }
  })

  useEffect(() => {
    if (data) {
      setProducts(data)
    }
  }, [data])

  if (isLoading) {
    return (
      <span>Cargando...</span>
    )
  }

  return (
    <div className='justify-center items-center h-auto w-auto mt-5 grid grid-flow-col grid-rows-2 gap-4'>
      {error && (
        <></>
      )}
      {(products && products.length > 0) ? (
        products.map((product: IProduct) => (
          <CardComponent key={product.id} product={product} />
        ))
      ) : (
        <span>No hay productos</span>
      )}
    </div>
  )
}

export default App
