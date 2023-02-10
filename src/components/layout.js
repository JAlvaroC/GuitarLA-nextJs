import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Header from './Header'


export default function Layout({children,title= '',description=''}) {
    // COMMENT: Rennderizara todo que recibe de children

    
  return (
    <>
    <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description"content={`${description}`}/>
    </Head>
    <Header/>
    {/* <h1>desde Layout</h1> */}
    {
        children
    }
    <Footer/>
    </>
  )
}
