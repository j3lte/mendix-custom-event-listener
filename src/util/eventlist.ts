import { ValueStatus } from "mendix";
import { EventListType } from "typings/CustomEventListenerProps";
import { executeAction } from "./action";

export type EventListenerObj = {
    on: "document" | "window";
    eventName: string;
    handler: (evt: CustomEvent) => void;
};

export const createEventListenerObjects = (list: EventListType[]): EventListenerObj[] | null => {
    if (!list || list.length === 0) {
        return null;
    }
    const eventNamesAvailable = !list.some(e => e.eventName.status !== ValueStatus.Available);
    const dataAttributesAvailable = !list.some(e =>
        e.dataAttribute ? e.dataAttribute.status !== ValueStatus.Available : false
    );
    const dataKeysAvailable = !list.some(e => (e.dataKeys ? e.dataKeys.status !== ValueStatus.Available : false));
    if (eventNamesAvailable && dataAttributesAvailable && dataKeysAvailable) {
        return list.map(e => ({
            on: e.eventOn,
            eventName: e.eventName.value as string,
            handler: evt => {
                if (e.dataAttribute && !e.dataAttribute.readOnly) {
                    if (e.dataKeys && e.dataKeys.value) {
                        const dataKeys = e.dataKeys.value
                            .split(",")
                            .map(key => key.trim())
                            .filter(key => key);
                        const data: Record<string, any> = {};
                        dataKeys.forEach(key => {
                            if (typeof (evt as Record<string, any>)[key] !== "undefined") {
                                data[key] = (evt as Record<string, any>)[key];
                            }
                        });
                        e.dataAttribute.setValue(JSON.stringify(data));
                    } else if (evt.detail) {
                        e.dataAttribute.setValue(JSON.stringify(evt.detail));
                    }
                }
                executeAction(e.onEventAction);
            }
        }));
    }
    return null;
};
