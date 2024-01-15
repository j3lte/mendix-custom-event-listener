import { createElement, FC, useEffect, useMemo } from "react";

import { CustomEventListenerContainerProps } from "../typings/CustomEventListenerProps";
import { createEventListenerObjects } from "./util/eventlist";

export const CustomEventListener: FC<CustomEventListenerContainerProps> = ({ eventList }) => {
    const events = useMemo(() => createEventListenerObjects(eventList), [eventList]);

    useEffect(() => {
        if (!events || events.length === 0) {
            return;
        }
        events.forEach(eventObj => {
            const target = eventObj.on === "window" ? window : document;
            target.addEventListener(eventObj.eventName, eventObj.handler);
        });

        return () => {
            events.forEach(eventObj => {
                const target = eventObj.on === "window" ? window : document;
                target.removeEventListener(eventObj.eventName, eventObj.handler);
            });
        };
    }, [events]);

    return <div className="custom-event-listener" />;
};
