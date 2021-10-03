import styles from "../styles/Index.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home({articles}) {
  
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className={styles.heading}>Homepage</h1>
      <ul>
        <li>
          <Link href="/posts/[id]" as={`/posts/${articles.id}`}>{articles.title}</Link>
        </li>
      </ul>
    </>
  );
}


export const getStaticProps = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const articles = await res.json();
  return{
    props:{
      articles
    }
  }
}