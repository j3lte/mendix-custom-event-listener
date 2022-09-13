import { ReactElement, createElement } from "react";
import { CustomEventListenerPreviewProps } from "../typings/CustomEventListenerProps";

// eslint-disable-next-line no-empty-pattern
export function preview({}: CustomEventListenerPreviewProps): ReactElement {
    return <div />;
}

export function getPreviewCss(): string {
    return "";
}
