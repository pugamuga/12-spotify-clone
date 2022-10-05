import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../components/Dashboard";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Spotify</title>
      </Head>
      <Dashboard />
    </div>
  );
};

export default Home;
