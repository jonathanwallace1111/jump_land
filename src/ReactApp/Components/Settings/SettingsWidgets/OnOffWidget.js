import { useContext } from 'react'
import styles from './SettingsWidgets.module.scss'
import { SaveDataContext } from '../../../Contexts/SaveDataContext'

export function OnOffWidget({ id, value }) {

    const { setSetting } = useContext(SaveDataContext);

    const handleChange = (e) => {
        setSetting(id, !value);
    }

    return (
        <div className={`${styles.onOffWidget} ${value ? styles.active : ""}`} onClick={handleChange}>
            <div className={styles.onOffBox} />
        </div>
    )
}