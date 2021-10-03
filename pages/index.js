import styles from "../styles/Index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rootpage</title>
      </Head>
      <h1 className={styles.heading}>Rootpage</h1>
    </>
  );
}
