import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
  signIn,
} from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../../components/Loader";

interface IProps {
  providers: ClientSafeProvider[];
}

export default function Signin({ providers }: IProps): JSX.Element {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);
  if (session) return <Loader />;

  return (
    <div className="h-screen flex pt-40 items-center flex-col space-y-8">
      <Head>
        <title>Login</title>
      </Head>
      <Image
        src={`https://rb.gy/y9mwtb`}
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />
      {Object.values(providers).map((provider: ClientSafeProvider) => {
        return (
          <div key={provider.name}>
            <button
              className="signInBtn"
              onClick={() => {
                signIn(provider.id);
              }}
            >
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
