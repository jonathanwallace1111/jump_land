export const DEFAULT_SETTINGS = {
    "DUMMY_1": {
        id: "DUMMY_1",
        type: "OnOff",
        name: "Dummy Setting",
        description: "This is a dummy setting",
        value: false,
    },
    "DUMMY_2": {
        id: "DUMMY_2",
        type: "OnOff",
        name: "Dummy Setting 2: Electric Boogaloo",
        description: "This is another dummy setting",
        value: false,
    },
    "DUMMY_3": {
        id: "DUMMY_3",
        type: "OnOff",
        name: "Third Dummy Does It",
        description: "Just kidding because...",
        value: false,
    },
    "DUMMY_4": {
        id: "DUMMY_4",
        type: "OnOff",
        name: "Four is an unlucky number in Japanese superstition",
        description: "To be clear, everything up to this point is still a dummy setting. But now we are ending that.",
        value: false,
    },
    "DUMMY_5": {
        id: "DUMMY_5",
        type: "OnOff",
        name: "Deprecated",
        description: "",
        value: false,
        deprecated: true
    },
}

export const cleanSettings = settings =>
    Object.keys(DEFAULT_SETTINGS)
        .filter(id => !DEFAULT_SETTINGS[id].deprecated)
        .reduce((r, id) =>
            settings[id] ?
                { ...r, [id]: settings[id] }
                : { ...r, [id]: DEFAULT_SETTINGS[id] },
            {});