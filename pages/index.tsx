import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DarkModeToggle from "../components/DarkModeToggle";
import SvgIcon from "../components/SvgIcon";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
       <Head>
        <title>Spotify</title>
      </Head>
    </div>
  );
};

export default Home;
