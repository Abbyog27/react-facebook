import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from './facebook/gaming/sidebar';
import Nav from './nav';

export default function Home() { // exporting the function Home
  return (
    <div className={styles.container}>
      <Head>
        <title>React Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navBarContainer}>
        <Nav />
      </div>

      <main>
        <h1 className={styles.title}>
          React Facebook
        </h1>

        <Image src='/engineer.png' alt='engineer' width='150' height='150'/>

        <p className={styles.description}>
          Connect with others!
        </p>

        <div className={styles.grid}>
          <Link href="/facebook/gaming/sidebar" className={styles.card}>
            <h3>Gaming &rarr;</h3>
          </Link>

        
          <Link href="/facebook/messages" className={styles.card}>
            <h3>Messages &rarr;</h3>
            <p>Someone wants to connect</p>
          </Link>

          <Link href="/facebook/notifications" className={styles.card}>
            <h3>Notifications &rarr;</h3>
            <p>Don't miss out</p>
          </Link>

          <Link href="/facebook/newsfeed" className={styles.card}>
            <h3>Newsfeed &rarr;</h3>
            <p>Keep up with the times</p>
            </Link>

          <Link href="/facebook/updates" className={styles.card}>
            <h3>Updates &rarr;</h3>
            <p> Find out what is headlining!</p>
            </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
