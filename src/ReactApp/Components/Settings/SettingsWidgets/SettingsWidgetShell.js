import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SettingsWidgets.module.scss';

export function SettingsWidgetShell({ children, name, description, icon = null }) {


    return (
        <div className={styles.standardShell}>
            <div className={styles.descriptionBox}>
                {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
                <div className={styles.name}>{name}</div>
                <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.widgetBody}>
                {children}
            </div>
        </div>
    );
}