import Head from 'next/head'

export default function HeaderComponent(props){
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="TrieuNT" />
        <meta name="description" content="Search your movies"/>
        <meta name="keywords" content="search film"/>
        <title>{props.title}</title>
      </Head>
    </>
  )
}