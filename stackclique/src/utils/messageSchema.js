"use strict";

export const userAccounts = [
    {
        id: 1,
        name: "Unnamed Dev",
    },
    {
        id: 2,
        name: "Agunwami",
    },
];

export const msgSchema = [
    {
        id: 1,
        user: userAccounts[0],
        reply: null,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione!",
        timestamp: "2022-08-05T02:09:44.597Z",
        seen: [1, 2],
    },
    {
        id: 2,
        user: userAccounts[1],
        reply: 1,
        text: "Lorem ipsum dolor sit amet.",
        timestamp: "2022-08-08T15:09:44.597Z",
        seen: [1, 2],
    },
    {
        id: 3,
        user: userAccounts[0],
        reply: null,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        timestamp: "2022-08-11T07:09:44.597Z",
        seen: [1, 2],
    },
    {
        id: 4,
        user: userAccounts[1],
        reply: null,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias.",
        timestamp: "2024-01-30T10:09:44.597Z",
        seen: [1,2],
    },
    {
        id: 5,
        user: userAccounts[0],
        reply: null,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione! Anu",
        timestamp: "2024-02-09T11:08:48.597Z",
        seen: [2],
    },
];

export const inboxSchema = [
    {
        id: 12,
        participants: [1, 2, 3],
        data: msgSchema,
        isGroupChat: true,
    },

    {
        id: 13,
        participants: [1, 2],
        data: msgSchema,
        isGroupChat: false,
    },
];
