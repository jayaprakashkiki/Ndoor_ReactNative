import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Container, Form } from 'native-base';
import Student_Admin_Screen from './Screens/Student_Admin';
import  Student_Login_Screen from './Screens/StudentLogin';
import Admin_Login_Screen from './Screens/AdminLogin';
import Gatepass_Form_Screen from './Screens/Gatepass_Form';
import onboarding1 from './Screens/onboarding1';
import onboarding2 from './Screens/onboarding2';
import onboarding3 from './Screens/onboarding3';
import Gatepass_List_Screen from './Screens/Gatepass_List';

export default function App() {
  
  return (
    <Container style={{marginTop:24}}>
      <Route />
    </Container>
  );
}
const AppRoute = createSwitchNavigator({
  initial: onboarding1,
  board2:onboarding2,
  board3:onboarding3,
  StudentAdmin:Student_Admin_Screen,
  Studentlogin:Student_Login_Screen,
  Adminlogin: Admin_Login_Screen,
  GatepassFormScreen:Gatepass_Form_Screen,
  StudentAdmin:Student_Admin_Screen,
  gatepassList:Gatepass_List_Screen
})
const Route = createAppContainer(AppRoute)