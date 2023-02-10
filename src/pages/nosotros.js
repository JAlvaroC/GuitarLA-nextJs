import Layout from '../components/layout'
import React from 'react'
import Image from 'next/image'
// import nosotros from '/img/nosotros.jpg'
import styles from '../styles/nosotros.module.css'

// NOTE: REMIX CREA LA RUTA /NOSOTROS
// COMMENT:Link  para trabajar las rutas 
export default function Nosotros() {
  return (
    <>
    <Layout
    title={`Nosotros`}
    description={`Sobre nosotros,GuitarLA, tienda de música `}
    >
      <main className={`contenedor`}>
        <h2 className='heading'>
          Nosotros
        </h2>    
        <div className={styles.contenido}>
          <Image src={'/img/nosotros.jpg'} alt={`Image sobre nosotros`} width={1000} height={800} />
          {/* <Image src={nosotros.src} alt={`Image sobre nosotros`} width={1000} height={800} /> */}
          <div>
           <p>
            Llit est minim laboris voluptate incididunt. Adipisicing quis duis cillum ut ex non. Consectetur esse labore ad consectetur eiusmod. Labore ipsum exercitation occaecat consectetur nisi anim velit dolore.
            Minim tempor ex aliqua ipsum incididunt ut nulla nostrud magna. Veniam nostrud tempor ea ullamco occaecat sunt Lorem. Deserunt aliqua enim proident minim esse ut aute non officia dolor esse.
            Excepteur ullamco eu laborum amet ullamco. Est elit elit laborum ipsum do anim aute. Dolor consectetur laboris proident eiusmod nostrud ipsum Lorem. Fugiat cillum nisi nostrud culpa est nulla duis non irure dolore. Nostrud reprehenderit mollit sunt ipsum pariatur. Proident esse consectetur elit exercitation cupidatat tempor sit dolore mollit non.
            Irure laborum eiusmod exercitation et ipsum incididunt enim et. Excepteur occaecat est magna cillum dolore nulla mollit. Anim nostrud in qui voluptate incididunt mollit. Ex enim do proident ex mollit Lorem sit. Duis nisi qui exercitation irure excepteur irure.</p> 
           <p>
            Llit est minim laboris voluptate incididunt. Adipisicing quis duis cillum ut ex non. Consectetur esse labore ad consectetur eiusmod. Labore ipsum exercitation occaecat consectetur nisi anim velit dolore.
            Minim tempor ex aliqua ipsum incididunt ut nulla nostrud magna. Veniam nostrud tempor ea ullamco occaecat sunt Lorem. Deserunt aliqua enim proident minim esse ut aute non officia dolor esse.
            </p>

          </div>
        </div>
      </main>
    </Layout>
    
    </>
  )
}
