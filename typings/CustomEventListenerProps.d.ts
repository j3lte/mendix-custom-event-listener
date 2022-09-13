/**
 * This file was generated from CustomEventListener.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export interface EventListType {
    eventName: DynamicValue<string>;
    dataAttribute?: EditableValue<string>;
    onEventAction?: ActionValue;
}

export interface EventListPreviewType {
    eventName: string;
    dataAttribute: string;
    onEventAction: {} | null;
}

export interface CustomEventListenerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    eventList: EventListType[];
}

export interface CustomEventListenerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    eventList: EventListPreviewType[];
}
