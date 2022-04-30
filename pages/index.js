import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Madresti</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <picture>
          <source srcSet='/fb-photo.png?webp' type='image/webp' />
          <source srcSet='/fb-photo.png' type='image/png' />
          <img src='/fb-photo.png' alt='Devoirati' className={styles.logo} />
        </picture>
        <span className={styles.tagline}>Coming soon!</span>
      </main>
    </div>
  );
}
