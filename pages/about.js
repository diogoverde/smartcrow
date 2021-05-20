import Layout from "../components/layout";
import { Underline } from "../components/underline";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col mt-10 md:mt-15 mb-8 ">
        <h1
          className="font-serif text-gray-900 text-4xl md:text-5xl font-bold mb-6 z-0"
          style={{ letterSpacing: -1 }}
        >
          About <Underline>smartcrow</Underline>
        </h1>
        <p></p>
      </div>
    </Layout>
  );
}
