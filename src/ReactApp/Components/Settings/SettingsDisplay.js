import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Settings.module.scss';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import { SaveDataContext } from '../../Contexts/SaveDataContext';
import { SettingsWidget } from './SettingsWidgets/SettingsWidget';

export const SettingsDisplay = (props) => {

    const {
        data,
        load,
        save,
    } = useContext(SaveDataContext);
    const settings = data.settings;

    useEffect(() => {
        load();
        return () => load();
    }, [])

    const settingRowProps = Object.values(settings)

    return (
        <div className={styles.settingsDisplay}>
            <div className={styles.titleContainer}>
                <FontAwesomeIcon className={styles.titleIcon} icon={faGear} />
                <div className={styles.titleText}>{"Settings"}</div>
            </div>
            <div className={styles.settingsBody}>
                {settingRowProps.map((srp) => <SettingsWidget key={`settings-display-option-${srp.id}`} {...srp} />)}
            </div>
            <div className={styles.settingsFooter}>
                <button onClick={() => window.history.back()}>{"BACK"}</button>
                <button onClick={save}>{"SAVE"}</button>
            </div>
        </div>
    )
}

export const SettingsPage = (props) => {
    return (
        <div className={styles.settingsPage}>
            <SettingsDisplay {...props} />
        </div>
    )
}