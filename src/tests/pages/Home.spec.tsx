import { render } from "@testing-library/react";
import Home, { getServerSideProps } from "../../pages";
import { mocked } from "ts-jest/utils";
import { api } from "../../services/api";
import { act } from "react-dom/test-utils";

jest.mock("../../services/api");

describe("home page", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Home seed={null} />);

    expect(getByText("Registro de usuários")).toBeInTheDocument();
  });

  it("passes the seed to the page", async () => {
    const response = await getServerSideProps({
      query: {
        seed: "123",
      },
    } as any);
    const apiMocked = mocked(api.get);

    apiMocked.mockReturnValueOnce({
      data: {
        results: [
          {
            gender: "female",

            name: {
              title: "Miss",
              first: "Juraci",
              last: "Rodrigues",
            },

            location: {
              street: {
                number: 4516,
                name: "Rua Mato Grosso ",
              },
              city: "Votorantim",
              state: "Piauí",
              country: "Brazil",
            },
            email: "juraci.rodrigues@example.com",

            login: {
              uuid: "8e4e76fa-10c7-4515-a635-c56e45b5b08f",
              username: "goldenrabbit421",
            },

            dob: {
              date: "1966-03-02T23:17:03.376Z",
            },

            registered: {
              date: "2017-12-15T10:13:32.428Z",
              age: 4,
            },
            phone: "(36) 3605-9648",
            cell: "(13) 4556-8465",

            id: {
              name: "",

              value: null,
            },

            picture: {
              large: "https://randomuser.me/api/portraits/women/27.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
              thumbnail:
                "https://randomuser.me/api/portraits/thumb/women/27.jpg",
            },
            nat: "BR",
          },
          {
            gender: "male",

            name: {
              title: "Miss",
              first: "Juraci",
              last: "Rodrigues",
            },

            location: {
              street: {
                number: 4516,
                name: "Rua Mato Grosso ",
              },
              city: "Votorantim",
              state: "Piauí",
              country: "Brazil",
            },
            email: "juraci.rodrigues@example.com",

            login: {
              uuid: "8e4e76fa-10c7-4515-a635-c56e45b5b08a",
              username: "goldenrabbit421",
            },

            dob: {
              date: "1966-03-02T23:17:03.376Z",
            },

            registered: {
              date: "2017-12-15T10:13:32.428Z",
              age: 4,
            },
            phone: "(36) 3605-9648",
            cell: "(13) 4556-8465",

            id: {
              name: "",

              value: null,
            },

            picture: {
              large: "https://randomuser.me/api/portraits/women/27.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
              thumbnail:
                "https://randomuser.me/api/portraits/thumb/women/27.jpg",
            },
            nat: "BR",
          },
        ],
        info: {
          seed: "123",
        },
      },
    } as any);

    await act(async () => {
      const { getByText } = render(<Home seed="123" />);

      expect(getByText("Registro de usuários")).toBeInTheDocument();
      expect(response).toEqual(
        expect.objectContaining({
          props: {
            seed: "123",
          },
        })
      );
    });
  });
});
