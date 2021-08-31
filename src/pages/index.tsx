import type { NextPage } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { FiPhone, FiBell, FiEye, FiSearch, FiArrowUp } from "react-icons/fi";
import Select from "react-select";
import { format } from "date-fns";
import Links from "../components/Links";
import { api } from "../services/api";
import genderOptions from "../utils/genderData";

const Home: NextPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [seed, setSeed] = useState("");
  const [page, setPage] = useState(2);
  const [userDetail, setUserDetail] = useState({} as any);
  const [showModal, setShowModal] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    return window.addEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/api?results=50");

      setSeed(response.data.info.seed);

      response.data.results.forEach((user: any) => {
        user.gender = user.gender === "female" ? "Feminino" : "Masculino";

        const dobDate = new Date(user.dob.date);
        user.dob.date = format(dobDate, "dd'/'MM'/'u");
      });

      setUsers(response.data.results);
    }

    loadUsers();
  }, []);

  function handleViewDetails(user: any) {
    setShowModal(true);

    setUserDetail(user);
  }

  async function handleLoadMore() {
    const response = await api.get(`/api?page=${page}&results=50&seed=${seed}`);

    setPage(page + 1);

    response.data.results.forEach((user: any) => {
      user.gender = user.gender === "female" ? "Feminino" : "Masculino";

      const dobDate = new Date(user.dob.date);
      user.dob.date = format(dobDate, "dd'/'MM'/'u");
    });

    setUsers([...users, ...response.data.results]);
  }

  return (
    <>
      {showScroll && (
        <button
          className="bg-blue-dark h-12 w-12 fixed bottom-8 right-11 flex items-center justify-center rounded-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FiArrowUp size={20} color="#fff" />
        </button>
      )}

      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black-default bg-opacity-50">
          <div className="shadow-lg relative flex flex-col max-w-screen-sm w-full h-1/2 bg-white pl-8 pr-4">
            <button
              className="bg-blue-dark absolute bottom-4 left-1/2 transform -translate-x-1/2 h-10 w-32 rounded-full"
              onClick={() => setShowModal(false)}
            >
              <p className="text-white">Fechar</p>
            </button>

            <div className="w-full flex flex-col items-center -mt-20">
              <Image
                src={userDetail.picture.large}
                alt={`${userDetail.name.first} ${userDetail.name.last}`}
                height={150}
                width={150}
                className="rounded-full"
                layout="fixed"
              />

              <h1 className="font-bold text-2xl mt-2">{`${userDetail.name.first} ${userDetail.name.last}`}</h1>
              <p>{userDetail.email}</p>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex gap-1 items-center">
                <span className="font-medium text-lg">Gênero: </span>
                <p className="text-lg">{userDetail.gender}</p>
              </div>

              <div className="flex gap-1 items-center">
                <span className="font-medium text-lg">
                  Data de nascimento:{" "}
                </span>
                <p className="text-lg">{userDetail.dob.date}</p>
              </div>

              <div className="flex gap-1 items-center">
                <span className="font-medium text-lg">Telefone: </span>
                <p className="text-lg">{userDetail.phone}</p>
              </div>

              <div className="flex gap-1 items-center">
                <span className="font-medium text-lg">Nacionalidade: </span>
                <p className="text-lg">{userDetail.nat}</p>
              </div>

              <div className="flex gap-1 items-center">
                <span className="font-medium text-lg">Endereço: </span>
                <p className="text-lg">
                  {userDetail.location.street.name},{" "}
                  {userDetail.location.street.number} -{" "}
                  {userDetail.location.city}, {userDetail.location.state}
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <span className="font-medium text-lg">ID: </span>
                <p className="text-lg">{userDetail.login.uuid}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-16 py-5">
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
            Busque e filtre por usuários do nosso banco de dados, clique em
            algum para obter mais informações sobre ele
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
              id="gender-select"
              instanceId="gender-select"
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
                placeholder: () => ({
                  fontSize: "14px",
                  color: "#888",
                }),
              }}
            />
          </div>
        </div>

        <main className="mt-10 bg-gray-light rounded-2xl px-12 pt-5 flex flex-col items-center">
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

            <tbody className="h-6"></tbody>

            <tbody>
              {users.map((user: any) => (
                <React.Fragment key={user.login.uuid}>
                  <tr className="bg-white h-16 text-sm">
                    <td className="rounded-l-2xl text-center">
                      <Image
                        src={user.picture.thumbnail}
                        alt={`${user.name.first} ${user.name.last}`}
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                    </td>
                    <td className="px-8">
                      <span className="font-medium">{`${user.name.first} ${user.name.last}`}</span>
                      <p className="text-gray-dark">{user.email}</p>
                    </td>
                    <td className="text-center">{user.gender}</td>
                    <td className="text-center">{user.dob.date}</td>
                    <td className="rounded-r-2xl">
                      <FiEye
                        size={20}
                        color="#235D6C"
                        className="cursor-pointer mx-auto"
                        onClick={() => handleViewDetails(user)}
                      />
                    </td>
                  </tr>

                  <tr className="h-3"></tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <button
            className="bg-blue-dark rounded-full w-44 h-10 my-6"
            onClick={handleLoadMore}
          >
            <p className="text-white">Carregar mais</p>
          </button>
        </main>
      </div>
    </>
  );
};

export default Home;
