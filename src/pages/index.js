import Curso from "@/components/curso";
import Guitarra from "@/components/guitarra";
import Layout from "@/components/layout";
import Post from "@/components/post";
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/grid.module.css'
export default function Home({guitarras,posts,curso}) {
  console.log({guitarras})
  console.log({posts})
  return (
    <>
      <Layout
      title={`Inicio`}
      description={'Blog de música,venta de guitarras y más'}
      >
        {/* <h1>Hola mundo Nextjs</h1> */}
        {/* <a href='/nosotros'>Nosotros</a> */}
        {/* <Link href={"/nosotros"}>Nosotros</Link> */}
        <main className='contenedor'>
        <h2 className='heading'>Nuestra Colección</h2>

          {guitarras?.length && (
              <div className={styles.grid}>
                  {guitarras.map( guitarra => (
                      <Guitarra
                          key={guitarra?.id}
                          guitarra={guitarra?.attributes}
                      />
                  ))}
              </div>
          )}
        </main>

        <Curso
            curso={curso?.attributes}
        />

        <section className='contenedor'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post =>(
            <Post
              key={post?.id}
              post={post?.attributes}
            />
          ))}
        </div>
        </section>
      </Layout>


    </>
  )
}

export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=*`
  const urlPosts = `${process.env.API_URL}/posts?populate=*`
  const urlCurso=`${process.env.API_URL}/curso?populate=*`


 const [resGuitarras,resPosts,resCurso]=await Promise.all([
   fetch(urlGuitarras),
   fetch(urlPosts),
   fetch(urlCurso)
 ])

 const [{data:guitarras},{data:posts},{data:curso}]=await Promise.all([
   resGuitarras.json(),
   resPosts.json(),
   resCurso.json()
 ])
  console.log({guitarras})
  console.log({posts})
  return {
   props:{
     guitarras,
     posts,curso
   }
  }
};