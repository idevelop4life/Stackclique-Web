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
        seen: [1, 2],
    },
    {
        id: 5,
        user: userAccounts[0],
        reply: null,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione! Anu",
        timestamp: "2024-02-09T11:08:48.597Z",
        seen: [1, 2],
    },
];

export const inboxSchema = [
    {
        id: 10,
        name: "Product Management",
        participants: [1, 2, 3],
        pins: [1],
        data: msgSchema.slice(0, 3),
        isGroupChat: true,
    },
    {
        id: 11,
        name: "UI/UX Designers",
        participants: [1, 2, 3],
        pins: [1, 2],
        data: msgSchema.slice(1, 4),
        isGroupChat: true,
    },
    {
        id: 12,
        name: "Data Analysts",
        participants: [1, 2, 3],
        pins: [1, 3],
        data: msgSchema.slice(0, 5),
        isGroupChat: true,
    },

    {
        id: 13,
        name: "",
        participants: [1, 2],
        pins: [],
        data: msgSchema,
        isGroupChat: false,
    },
];
