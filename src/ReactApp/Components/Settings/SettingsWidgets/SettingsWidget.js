import { OnOffWidget } from "./OnOffWidget";
import { SettingsWidgetShell } from "./SettingsWidgetShell";


export function SettingsWidget(props) {

    return (
        <SettingsWidgetShell {...props}>
            {
                {
                    OnOff: <OnOffWidget {...props} />
                }[props.type] ?? null
            }
        </SettingsWidgetShell>
    );
}