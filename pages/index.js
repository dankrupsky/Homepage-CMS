import Head from "next/head";
import styles from "../styles/Home.module.css";
  
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dan Krupsky's Homepage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
  
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Dan Krupsky
                </h1>
                <p className={styles.description}>
                    Homepage
                </p>
  
            </main>
        </div>
    );
}
