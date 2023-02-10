import { formatearFecha } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/blog.module.css'

export default function Post({post}) {
    console.log('llego',post)
    const {contenido, imagen, titulo, url, publishedAt } = post
    // console.log({titulo},'llego')
  return (
    <article className="post">
    <Image className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`}  width={600} height={400}/>
    <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>Leer Post</Link>
    </div>
</article>
  )
}
