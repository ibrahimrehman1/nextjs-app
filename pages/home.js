import styles from "../styles/Index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className={styles.heading}>Homepage</h1>
    </>
  );
}
