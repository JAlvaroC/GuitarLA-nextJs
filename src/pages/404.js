import React from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'
export default function Pagina404() {
  return (
    <Layout>
        <p className='error'>Pagina No Enncotrado</p>
        <Link href="/" className='error-enlace' >
                    Ir al inicio 
        </Link>
    </Layout>
  )
}
