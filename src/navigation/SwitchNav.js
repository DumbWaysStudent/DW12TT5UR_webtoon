import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import ScreenNavPage from './ScreenNav';
import loginPage from '../screen/Login'


const SwitchNav = createSwitchNavigator({
    Login : loginPage,
    ScreenNav: ScreenNavPage,  
}
)

export default createAppContainer(SwitchNav);