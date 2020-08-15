import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Loading from '~/pages/Loading'
import About from '~/pages/About'
import Messages from '~/pages/Messages'
import LabAndWorkshop from '~/pages/LabAndWorkshop'
import Head from '~/components/Head'


const Routes = createAppContainer(createSwitchNavigator({ Messages }));

export default Routes;
