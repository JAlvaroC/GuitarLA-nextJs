// import Image from 'next/future/image'
import React from 'react'
import logo from '/public/img/logo.svg'
// import logo from '/public'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'
//COMMENT: ofrece mejoras en las imagenes el componet de /future/image
export default function Header() {
    // FUNCTION:userouter() permite acceder al objeto enrutador
    const router=useRouter()
    console.log(router.pathname==='/')
    console.log(router.pathname)

    // const style =  {
        
    // };
    
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href={`/`}>
            
            {/* <img src={logo.src}/> */}
            {/* NOTE: Usamos <Image> componente propio de next para isnertar una imagen con props {high y widht} */}
            {/* <Image src={logo.src} ancho={300} alto={40} alt='imagen logotipo'/> */}
            {/* <Image src={logo.src} height={300} width={40} alt='imagen logotipo'/> */}
            <Image src={logo} height={300} width={400} alt='imagen logotipo'/>
            {/* NOTE: no compila de esta manera */}
            {/* <Image src={`/public/img/logo.svg`} height={300} width={40} alt='imagen logotipo'/> */}
            
            </Link>

            <nav className={styles.navegacion}>
                <Link   className={router.pathname==='/'?styles.active:''} href="/">
                    {/* NOTE: No funciona por la actualziacion
                    <a  className={router.pathname==='/'?styles.active:''}>
                        Inicio
                    </a> */}
                    {/* <a  className="enlace"> */}
                        Inicio
                    {/* </a> */}
                </Link>
                <Link className={router.pathname==='/nosotros'?styles.active:''} href="/nosotros">
                    Nosotros
                </Link>
                <Link className={router.pathname==='/tienda'?styles.active:''} href="/tienda">
                    Tienda
                </Link>
                <Link className={router.pathname==='/blog'?styles.active:''} href="/blog">
                    Blog
                </Link>
                <Link  href="/carrito">
                    <Image width={30} height={25} src="/img/carrito.png" alt='imagen carrito'/>
                </Link>
           
            </nav>
        </div>
    </header>
  )
}
