import Layout from '../components/layout'
import React from 'react'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {
  console.log(`gaaaaa`,guitarras)
  return (
    <>
    <Layout
    title={`Tienda Virtual`}
    description={`tienda Virtual,venta de guitarra,instrumentos, GuitarLA`}
    >

    {/* <h1>desde Tiendna.js</h1> */}
    {/* <a href={'/'}>Inicio</a> */}
    <main className='contennedor'>
      <h1 className='heading'>
        Nuestra Coleccion
      </h1>
      <div className={styles.grid}>
      {
        guitarras?.map(guitarra=>(
          // NOTE: usar () cuando es un compoente corchete si son mas {} sino dara error
          <Guitarra
          key={guitarra?.id}
          guitarra={guitarra?.attributes}/>

        )

        )
      }

      </div>
    </main>
    </Layout>
    
    </>
  )
}

// COMMENT : Esto necesitara hacer un "npm run build" para altualizar la informacion
// export async function getStaticProps(){
//    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)

//    const {data:guitarras}=await respuesta.json()
//    console.log(guitarras)
//    return {
//     props:{
//       // resultado
//       guitarras
//     }
//    }
// };

export async function getServerSideProps(){
  // COMMENT : Esto necesitara hacer un "npm run build" para altualizar la informacion
   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)

   const {data:guitarras}=await respuesta.json()
   console.log(guitarras)
   return {
    props:{
      // resultado
      guitarras
    }
   }
};


// NOTE:Otener los datos de una API
// getServerSideProps-Los datos se obtienen en cada request
// (Server Side Rendering - SSR) usar cuando la informacion cambia de forma contiua
// getStaticProps-Obtener los datos cuando se crea el build
// (Static Site Generation - SSG)-cuando la informacion no cambia en cada request para paginas informativas
// getStaticPaths - Obtener el listado de páginas que se van a crear
// cuando se realiza el build (Static Site Generation)
