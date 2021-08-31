import type { NextPage } from "next";
import Image from "next/image";
import { FiPhone, FiBell, FiEye, FiSearch } from "react-icons/fi";
import Select from "react-select";
import Links from "../components/Links";
import genderOptions from "../utils/genderData";

const Home: NextPage = () => {
  return (
    <div className="px-16 pt-5">
      <header className="h-16 flex justify-between items-center">
        <Image src="/Pharma.svg" alt="Pharma" width={110} height={44} />

        <Links active="Início" />

        <div className="flex items-center gap-5">
          <FiPhone size={20} color="#555" />
          <FiBell size={20} color="#555" />

          <div className="w-px h-7 bg-gray-default" />

          <div className="flex">
            <div className="mr-4 flex flex-col">
              <h1 className="text-lg text-right">Eduardo Bravo</h1>
              <span className="text-sm text-gray-dark text-right">
                eduardo@gmail.com
              </span>
            </div>

            <Image
              src="https://github.com/eduardobravop.png"
              alt="Eduardo Bravo"
              height={50}
              width={50}
              className="rounded-full"
            />
          </div>
        </div>
      </header>

      <div className="mt-10">
        <h1 className="font-medium text-2xl text-blue-dark">
          Registro de usuários
        </h1>

        <p className="mt-4 text-sm text-black-light mb-5">
          Busque e filtre por usuários do nosso banco de dados, clique em algum
          para obter mais informações sobre ele
        </p>

        <div className="flex">
          <div className="flex items-center px-2 h-10 w-full max-w-2xl mr-2 rounded-2xl border-gray-default border focus-within:border-blue-default">
            <FiSearch size={20} color="#888" />

            <input
              type="text"
              placeholder="Busque por nome ou nacionalidade..."
              className="w-full max-w-2xl outline-none ml-2 text-sm"
            />
          </div>

          <Select
            options={genderOptions}
            isClearable
            placeholder="Gênero"
            width="200px"
            styles={{
              option: (provided, state) => ({
                ...provided,
                background: state.isSelected
                  ? "#3599A8"
                  : state.isFocused
                  ? "#AEE8F1"
                  : "#fff",
              }),
              menu: (provided, state) => ({
                ...provided,
                width: state.selectProps.width,
              }),
              container: (provided, { selectProps: { width } }) => ({
                ...provided,
                width: width,
                margin: 0,
                fontSize: "14px",
              }),
              control: (provided, state) => ({
                ...provided,
                borderRadius: "20px",
                boxShadow: "#3599A8",
                borderColor: state.isFocused ? "#3599A8" : "#CCC",
                "&:hover": {
                  border: "1px solid #3599A8",
                },
              }),
              placeholder: (provided, state) => ({
                fontSize: "14px",
                color: "#888",
              }),
            }}
          />
        </div>
      </div>

      <main className="mt-10 bg-gray-light rounded-2xl px-12 py-5">
        <table className="w-full">
          <thead>
            <tr className="text-gray-dark font-medium text-lg">
              <th>Perfil</th>
              <th className="text-left px-8">Nome</th>
              <th>Gênero</th>
              <th>Data de nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>

          <div className="h-6"></div>

          <tbody>
            <tr className="bg-white h-16 text-sm">
              <td className="rounded-l-2xl text-center">
                <Image
                  src="https://github.com/eduardobravop.png"
                  alt="Eduardo Bravo"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </td>
              <td className="px-8">
                <span className="font-medium">Eduardo Bravo</span>
                <p className="text-gray-dark">eduardobravo@gmail.com</p>
              </td>
              <td className="text-center">Masculino</td>
              <td className="text-center">05/12/2004</td>
              <td className="rounded-r-2xl">
                <FiEye
                  size={20}
                  color="#235D6C"
                  className="cursor-pointer mx-auto"
                />
              </td>
            </tr>

            <tr className="h-3"></tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Home;
