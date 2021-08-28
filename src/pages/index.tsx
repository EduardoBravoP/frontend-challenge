import type { NextPage } from "next";
import Image from "next/image";
import { FiPhone, FiBell } from "react-icons/fi";
import Links from "../components/Links";

const Home: NextPage = () => {
  return (
    <div className="px-16 pt-5">
      <header className="h-16 flex justify-between items-center">
        <Image src="/Pharma.svg" alt="Pharma" width={110} height={44} />

        <Links active="Início" />

        <div>
          <FiPhone size={20} />
          <FiBell size={20} />
        </div>
      </header>

      <div>
        <h1>Description</h1>
      </div>

      <main>
        <h1>Table</h1>
      </main>
    </div>
  );
};

export default Home;
