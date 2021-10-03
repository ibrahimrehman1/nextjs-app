import styles from "../styles/Index.module.css";
import Head from "next/head";

export default function Home({status}) {
  return (
    <>
      <Head>
        <title>Rootpage</title>
      </Head>
      <h1 className={styles.heading}>{status.status}</h1>
    </>
  );
}

export const getServerSideProps = async () =>{
  const res = await fetch("http://localhost:3000/api/getData");
  const status = await res.json();
  return{
    props: {
      status
    }
  }
}
