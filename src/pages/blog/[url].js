import Layout from '@/components/layout'
import { formatearFecha } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/blog.module.css'

export default function Post({post}) {
    console.log('jajaja',post)
    const {contenido, imagen, titulo, url, publishedAt } = post[0].attributes
  return (
    <Layout 
        title={titulo}
    >
       <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image className="imagen" src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} width={1000} height={400}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)} </p>
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
    </Layout>
  )
}
export async function getServerSideProps({query:{url}}){
  console.log('llego',url)
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=*`)
  // const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${`vai`}&populate=*`)
  // const respuesta = await fetch(`http://localhost:1337/api/guitarras?filters[url]=vai&populate=*`)
  console.log('respuesta',respuesta)
  const {data:post}= await respuesta.json()
  console.log('data',post)
  return{
    props:{
      post
    }
  }
}