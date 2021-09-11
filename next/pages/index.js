// require('dotenv').config();
// const fs = require('fs');
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return <div>fresh to death</div>;
}

export const getServerSideProps = async (ctx) => {
  // let DATABASE_URL = process.env.DATABASE_URL;
  return {
    props: {
      DATABASE_URL,
    },
  };
};
