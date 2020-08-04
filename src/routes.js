import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Loading from '~/pages/Loading'
import MenuBar from "~/components/MenuBar";

const Routes = createAppContainer(createSwitchNavigator({ MenuBar }));

export default Routes;
