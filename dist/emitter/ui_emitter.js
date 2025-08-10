import { useEffect } from "react";
export function UIEmitter(controller, callback) {
    useEffect(() => {
        controller.on(callback);
        return () => {
            controller.off();
        };
    }, []);
}
