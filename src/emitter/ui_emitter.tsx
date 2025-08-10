import { useEffect } from "react";
import { GenericCallback } from "../callbacks/callbacks";
import EmitterController from "./emitter_controller";

export default function UIEmitter<T>(
  controller: EmitterController<T>,
  callback: GenericCallback<T>
) {
  useEffect(() => {
    controller.on(callback);
    return () => {
      controller.off();
    };
  }, []);
}
