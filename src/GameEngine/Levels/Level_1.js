const level1 = {
    levelMetaData: {

    },
    protagonist: {
        id: "Protagonist",
        x: 50,
        y: 600,
        w: 50,
        h: 50,
        gravityDirection: "down",
        fillColor: "#0247FE",
        strokeColor: "white"
    },
    deathStake: {
        x: 400, 
        y: 685,
        w: 10,
        h: 40,
        id:5
    },
    goalObject: {
        x: 650,
        y: 700, 
        w: 50,
        h: 50,
        id: 6,
    },
    platforms: [
        {
            id: 1,
            x: 0,
            y: 0,
            w: 780,
            h: 20,
            fillColor: "#FE2712",
            strokeColor: "white"
        },
        {
            id: 2,
            x: 780,
            y: 0,
            w: 20,
            h: 780,
            fillColor: "#FE2712",
            strokeColor: "white"
        },
        {
            id: 3,
            x: 20,
            y: 780,
            w: 780,
            h: 20,
            fillColor: "#FE2712",
            strokeColor: "white"
        },
        {
            id: 4,
            x: 0,
            y: 20,
            w: 20,
            h: 780,
            fillColor: "#FE2712",
            strokeColor: "white"
        }
    ]
}

export { level1 }; 