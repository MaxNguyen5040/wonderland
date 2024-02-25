import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Terrific Tea Transformer</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <h1>Terrific Tea Transformer</h1>
  
  {/*user input*/}
  <form action="/action_page.php">
    <label htmlFor="flavour">Flavour:</label>
    <input type="text" id="flavour" name="flavour" />
    <br />
    <label htmlFor="brand">Brand:</label>
    <input type="text" id="brand" name="brand" />
    <br />
    <span>Caffeine:</span>
    <input type="radio" id="yes" name="caffeine" defaultValue="yes" />
    <label htmlFor="yes">Yes</label>
    <input type="radio" id="no" name="caffeine" defaultValue="no" />
    <label htmlFor="no">No</label>
    <br />
    {/*submit button, form-handler needs specifying*/}
    <input type="submit" defaultValue="Submit" />
  </form>
</>
  );
}
