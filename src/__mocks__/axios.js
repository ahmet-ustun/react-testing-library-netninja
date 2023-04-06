const mockedResponse = {
  data: {
    results: [
      {
        name: {
          first: "Ahmet",
          last: "Ustun",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/74.jpg",
        },
        email: "ahmetustunt@gmail.com",
        login: {
          username: "MiniNinja",
        },
      },
      {
        name: {
          first: "Emma",
          last: "Williams",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/35.jpg",
        },
        email: "emmawilliams@gmail.com",
        login: {
          username: "emmawill",
        },
      },
      {
        name: {
          first: "Jacob",
          last: "Jones",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/15.jpg",
        },
        email: "jacob.jones@gmail.com",
        login: {
          username: "jacojones",
        },
      },
      {
        name: {
          first: "Sophie",
          last: "Lee",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/9.jpg",
        },
        email: "sophie.lee@gmail.com",
        login: {
          username: "sophlee",
        },
      },
      {
        name: {
          first: "Ethan",
          last: "Garcia",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/7.jpg",
        },
        email: "ethan.garcia@gmail.com",
        login: {
          username: "ethangar",
        },
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockedResponse),
};
