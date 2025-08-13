import { useContext } from "react";
import {
  SampleViewModel,
  SampleViewModelContext,
} from "../view_model/sample_view_model";

export function SampleMainView() {
  const vm = useContext<SampleViewModel | undefined>(SampleViewModelContext);
  return <>SampleMainView</>;
}
