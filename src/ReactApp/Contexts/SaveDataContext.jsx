import React, { useState, useEffect } from "react";
import { DEFAULT_SETTINGS, cleanSettings } from "../../Data/DefaultSettings";

const DATA_OBJECT_NAME = "saveData";

const defaultLocalData = {
    settings: cleanSettings(DEFAULT_SETTINGS),
    levels: {},
    scores: {}
}

export const SaveDataContext = React.createContext({});

export default function SaveDataContextProvider({ children }) {

    const [localData, setLocalData] = useState({ ...defaultLocalData });

    const loadLocalData = () => {
        const jsonData = localStorage.getItem(DATA_OBJECT_NAME);
        if (jsonData) {
            try {
                const data = JSON.parse(jsonData);

                data.settings = cleanSettings(data.settings);

                setLocalData(data);
            } catch {
                setLocalData({ ...defaultLocalData });
            }
        }
    };

    const saveLocalData = () => {
        localStorage.setItem(DATA_OBJECT_NAME, JSON.stringify(localData));
    }

    const setData = (section, key, value) => {
        setLocalData(localData => ({
            ...localData,
            [section]: {
                ...localData[section],
                [key]: { ...localData?.[section]?.[key], value }
            }
        }));
    }

    useEffect(() => {
        loadLocalData()
    }, []);


    const providerValue = {
        data: localData,
        load: loadLocalData,
        save: saveLocalData,
        setSetting: setData.bind(null, "settings"),
        setLevel: setData.bind(null, "levels"),
        setScore: setData.bind(null, "scores"),
    }

    return (
        <SaveDataContext.Provider value={providerValue}>
            {children}
        </SaveDataContext.Provider>
    );
}