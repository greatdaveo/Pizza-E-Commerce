import style from "../styles/Home.module.css";
import Hero from "@/components/Hero";
import SharedLayout from "@/components/SharedLayout";
import Head from "next/head";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <SharedLayout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={style.home_container}>
          <Hero />
          <Services />
        </main>
      </SharedLayout>
    </>
  );
}
