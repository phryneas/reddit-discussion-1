import { Counter } from "@/components/Counter";
import { bigRandom } from "@/random";

export default function Home() {
  const x = bigRandom.split("").reduce((_, x) => x);
  return (
    <main>
      The big library has a string that ends with {x}. Here you have an interacive counter:{" "}
      <Counter />
    </main>
  );
}
