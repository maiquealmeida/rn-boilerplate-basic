import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "~/screens/Main";
import Detail from "~/screens/Detail";

const MainRoute = createSwitchNavigator(
  {
    Main,
    Detail
  },
  {
    initialRouteName: "Main"
  }
);

const Routes = createAppContainer(MainRoute);

export default Routes;
