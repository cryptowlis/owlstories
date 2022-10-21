import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Owl Stories</title>
      </Head>
      <Layout>
        <div>
          <h1>Products</h1>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
