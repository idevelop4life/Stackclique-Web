# Message Schema Blueprint

"I believe we need to understand the structure of the current schema blueprint for the messageing section, it will help use to know how to iterate throug the messages arrays and get the relevant information from them." - Anuoluwa

### The MessageContainer component

Assuming the user has clicked into a message inbox. the script is to select the object with matching message id shared by both users and display the conversation. Then an authorization funtionality must be put in place so as to avoid other none participants from access the message data.

The current schema for this is:

```
[
        {
            id: 1,
            user: {
                id: 1,
                name: "Unnamed Dev",
            },
            reply: null,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione!",
            timestamp: "2022-08-05T02:09:44.597Z",
        },
        {
            id: 2,
            user: {
                id: 2,
                name: "Agunwami",
            },
            reply: 1,   // message id
            text: "Lorem ipsum dolor sit amet.",
            timestamp: "2022-08-08T15:09:44.597Z",
        },
        ...
    ]
```

### The Connect/Message section

Now let's look at the larger view, we'd need the a comprehensive list of message objects linked with the user's id. But we'll need to differentiate a group chat from an individual chat, probably by adding a boolean property.s

```

```
