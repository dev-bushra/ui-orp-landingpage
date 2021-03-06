import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HomeEntry from "../components/Home/HomeEntry";
import { ThemeContext } from "../contexts/ThemeContext";
import PreLoad from "../components/PreLoad";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTheme("dark");
    AOS.init({ duration: "1000" });

    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {load ? (
        <PreLoad />
      ) : (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <main
            className="dark:bg-black bg-slate-50 min-h-screen"
            data-aos="fade-in"
          >
            <HomeEntry />
          </main>
        </ThemeContext.Provider>
      )}
    </div>
  );
}
