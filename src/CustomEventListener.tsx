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
            document.addEventListener(eventObj.eventName, eventObj.handler);
        });

        return () => {
            events.forEach(eventObj => {
                document.removeEventListener(eventObj.eventName, eventObj.handler);
            });
        };
    }, [events]);

    return <div className="custom-event-listener" />;
};
