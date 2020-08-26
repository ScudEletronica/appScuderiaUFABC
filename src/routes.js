import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Loading from '~/pages/Loading'
import Main from '~/pages/Main'
import About from '~/pages/About'
import Messages from '~/pages/Messages'
import Message from '~/pages/Message'
import LabAndWorkshop from '~/pages/LabAndWorkshop'
import Telemetry from '~/pages/Telemetry'
import MyRequirements from '~/pages/MyRequirements'
import NewRequirement from '~/pages/NewRequirement'
import Review from '~/pages/Review'
import Settings from '~/pages/Settings'
import Profile from '~/pages/Profile'
import MenuBar from '~/components/MenuBar'
import AsktoOpen from '~/components/AsktoOpen'
import ChangeAvatar from '~/components/ChangeAvatar'


const Routes = createAppContainer(createSwitchNavigator({ Review }));

export default Routes;
