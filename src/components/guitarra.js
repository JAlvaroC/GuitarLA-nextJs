import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/guitarras.module.css'
export default function Guitarra({guitarra}) {
    console.log('guitarras',guitarra)
    const {descripcion,Imagen,nombre,precio,url} =guitarra
  return (
    <div className={styles.guitarra}>
      {/* NOTE: ruta sacado de JSON VIEW PRO ayuda a obteer la ruta  */}
      {/* data[0].attributes.Imagen.data.attributes.formats.small.url */}
      <Image src={Imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`} width={600} height={400}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    
    </div>
  )
}
