
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import { Navbar } from '../ui'

interface Props {
  children: ReactNode,
  title?: string
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin)


export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Fernando Herrera" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />


        <meta property="og:title" content={`Informacion sibre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.img`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>

    </>
  )
};

