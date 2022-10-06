import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";

const Home: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required:true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });


  if(status ==="loading"){
    return <Loader/>
  }
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
