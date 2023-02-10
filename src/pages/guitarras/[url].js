import Layout from '@/components/layout'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/guitarras.module.css'

export default function Producto({guitarra,agregarCarrito}) {
  // console.log(first)
  // NOTE: para tener una ruta se crea un archivo y se usa [cualquiernnombre].js ejempplo:[url].js 
  // const router=useRouter()
  // console.log(guitarra[0].attributes.nombre)
  const [cantidad, setCantidad] = useState(0)
  const  {nombre,descripcion,Imagen,precio}=guitarra[0]?.attributes
  const handleSubmit = e => {
    e.preventDefault()

    if(cantidad < 1) {
        alert('Cantidad no válida')
        return
    }

    // Construir un objeto
    const guitarraSeleccionada = {
        id: guitarra[0].id,
        imagen: Imagen.data.attributes.url,
        nombre,
        precio,
        cantidad
    }

    // Pasando la información
    agregarCarrito(guitarraSeleccionada)
}

  return (
    <Layout
    title={`Guitarra ${nombre}`}
>
    <div className={styles.guitarra}>
        <Image src={Imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            

            <form 
                onSubmit={handleSubmit}
                className={styles.formulario}
            >
                <label htmlFor="cantidad">Cantidad:</label>

                <select 
                // NOTE: usar number(), parseit o +  para coertir a entero
                    onChange={ e => setCantidad(+e.target.value) }
                    id="cantidad">
                    <option value="0">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input
                    type="submit"
                    value="Agregar al carrito"
                />
            </form>
        </div>
    </div>
</Layout>
  )
}
export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const {data}= await respuesta.json()
  console.log(data)
  const paths=data.map(guitarra=>({
    params:{
      url:guitarra.attributes.url
    }
  }))
  console.log(paths)
  return{
 
      paths,
      fallback:false
      // NOTE:fallback actuara cuando la pagina no existe poniendo una pag 404
    }
  
}
export async function getStaticProps({params:{url}}){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`)
  console.log('respuesta',respuesta)
  const {data:guitarra}= await respuesta.json()
  // console.log(data)
  return{
    props:{
      guitarra
    }
  }
}


// export async function getServerSideProps({query:{url}}){
//   console.log('llego',url)
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`)
//   // const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${`vai`}&populate=*`)
//   // const respuesta = await fetch(`http://localhost:1337/api/guitarras?filters[url]=vai&populate=*`)
//   console.log('respuesta',respuesta)
//   const {data:guitarra}= await respuesta.json()
//   // console.log(data)
//   return{
//     props:{
//       guitarra
//     }
//   }
// }


