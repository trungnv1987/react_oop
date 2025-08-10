import { useEffect } from "react";
export default function UIEmitter(controller, callback) {
    useEffect(() => {
        controller.on(callback);
        return () => {
            controller.off();
        };
    }, []);
}
