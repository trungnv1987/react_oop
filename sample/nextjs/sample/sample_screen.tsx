// "use client";
// import {
//   SampleViewModel,
//   SampleViewModelContext,
// } from "./view_model/sample_view_model";
// import { SampleMainView } from "./components/sample_main_view";
// import { AppScreen } from 'react_oop';

// // for nextjs
// export const SampleScreenClient = dynamic(() => import("./sample_screen"), {
//   ssr: false,
// });

// export type SampleScreenProps = {};

// export function SampleScreen(props: SampleScreenProps) {
//   const viewModel = new SampleViewModel();
//   return (
//     <AppScreen<SampleViewModel>
//       viewModel={viewModel}
//       viewModelContext={SampleViewModelContext}
//     >
//       <SampleMainView />
//     </AppScreen>
//   );
// }
