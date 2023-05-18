import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { bigRandom } from "@/random";
import { Counter } from "@/components/Counter";

const inter = Inter({ subsets: ["latin"] });

export function getStaticProps() {
  return { props: {} };
}

export default function Home() {
  const x = bigRandom.split("").reduce((_, x) => x);
  return (
    <main>
      The big library has a string that ends with {x}. Here you have an interacive counter:{" "}
      <Counter />
    </main>
  );
}
