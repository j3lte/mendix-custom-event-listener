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
    if (eventNamesAvailable && dataAttributesAvailable) {
        return list.map(e => ({
            on: e.eventOn,
            eventName: e.eventName.value as string,
            handler: evt => {
                if (e.dataAttribute && !e.dataAttribute.readOnly && evt.detail) {
                    e.dataAttribute.setValue(JSON.stringify(evt.detail));
                }
                executeAction(e.onEventAction);
            }
        }));
    }
    return null;
};
