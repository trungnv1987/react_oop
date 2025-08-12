import { useContext } from "react";
import { SampleViewModel } from "../view_model/sample_view_model";

export function SampleMainView() {
  const vm = useContext<SampleViewModel | undefined>(SampleViewModel.context);
  return <>hello</>;
}
