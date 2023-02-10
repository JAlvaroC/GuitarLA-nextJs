import Layout from '../components/layout'
import React from 'react'
import Post from '@/components/post'
import styles from '../styles/grid.module.css'

// NOTE: REMIX CREA LA RUTA /NOSOTROS
// COMMENT:Link  para trabajar las rutas 
export default function Blog({posts}) {
//   const  {titulo}=posts[0].attributes
//   console.log('hola titulo',titulo)
  // console.log('aca',posts)
  return (
    <>
    <Layout
    title={`Blog`}
    description={`Sobre Blog,GuitarLA, tienda de música `}
    >
      <main className='contenedor'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post =>(
            <Post
              key={post?.id}
              post={post?.attributes}
            />
          ))}
        </div>

      </main>
    {/* <div>Blog</div> */}
    {/* <a href={'/'}>Inicio</a> */}
    </Layout>
    
    </>
  )
}
export async function getStaticProps(){
   const respuesta = await fetch(`${process.env.API_URL}/posts?populate=*`)

   const {data:posts}=await respuesta.json()
   console.log(posts)
   return {
    props:{
      // resultado
      posts
    }
   }
};