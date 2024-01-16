/**
 * This file was generated from CustomEventListener.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type EventOnEnum = "document" | "window";

export interface EventListType {
    eventOn: EventOnEnum;
    eventName: DynamicValue<string>;
    dataAttribute?: EditableValue<string>;
    onEventAction?: ActionValue;
    dataKeys?: DynamicValue<string>;
}

export interface EventListPreviewType {
    eventOn: EventOnEnum;
    eventName: string;
    dataAttribute: string;
    onEventAction: {} | null;
    dataKeys: string;
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
