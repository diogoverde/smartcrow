import Head from "next/head";
import Layout from "../components/layout";
import { Underline } from "../components/underline";

const listJobs = [
  {
    name: "Help Scout",
    positions: "8",
    description:
      "Help Scout offers a help desk invisible to customers, that helps companies deliver outstanding customer support.",
  },
  {
    name: "Remote.com",
    positions: "36",
    description:
      "Remote.com offers international payroll, benefits and compliance services for distributed employees and contractors.",
  },
  {
    name: "Cloudflare",
    positions: "36",
    description:
      "Remote.com offers international payroll, benefits and compliance services for distributed employees and contractors.",
  },
];

export default function Home() {
  return (
    <Layout>
      <div>
        <h1
          className="font-serif text-gray-900 text-4xl md:text-5xl font-bold mb-6 z-0"
          style={{ letterSpacing: -1 }}
        >
          Full-remote and remote-firendly tech <Underline>companies</Underline>{" "}
          and <Underline>startups</Underline>
        </h1>
        <p>Discover the best companies to work of every size and shape</p>
        <p>
          If you are a company and would like to reach us,{" "}
          <a href="">get in touch!</a>
        </p>
      </div>
    </Layout>
  );
}
