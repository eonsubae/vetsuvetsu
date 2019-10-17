import Link from 'next/link';
import Head from 'next/head';

import '../styles/components/main.scss';

const vetSuIndex = () => (
  <main className="main">
    <Head>
      <title>Vetsu X 2</title>
    </Head>
    <section className="intro">
      <article className="intro-wrapper">
        <h1 className="intro__title">
          <p>Make Your Own</p>
          <p>Wordbook</p>
        </h1>
        <Link href="/wordbook">
          <a className="intro__btn">Learn More</a>
        </Link>
      </article>
    </section>
  </main>
);

export default vetSuIndex;