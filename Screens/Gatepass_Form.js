import React, { useState } from 'react';
import { Header, Left, Picker, Form, Item, Input, Image, Body, Footer, FooterTab, Icon, Card, CardItem, Content, H1, H2, H5, H3, Grid, Row, Col, Right, Button, Container, Label } from 'native-base';
import { Text, BackHandler, View, Platform } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast'
import Date_time_picker from './date_time_picker';
import { LinearGradient } from 'expo-linear-gradient';

import DateTimePicker from '@react-native-community/datetimepicker';

class Gatepass_Form_Screen extends React.Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.

            return true;
        });
    }




    render() {

        return (

            <LinearGradient colors={['#0f1119', '#6a0582']} style={{ flex: 1 }}>

                <Header style={{ backgroundColor: '#12132b' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Studentlogin')}>
                            <Icon name="arrow-back" style={{ color: 'white', padding: 5 }} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: 'white' }}>GatePass</Text>
                    </Body>
                    <Right style={{ padding: 6 }}>
                        <Icon name='book' style={{ color: 'white' }} />
                    </Right>
                </Header>

                <Content padder>

                    <Card style={{ borderRadius: 20 }}>
                        <H2 style={{ textAlign: 'center', paddingTop: 30 }}>Student</H2>
                        <Form  >
                            <Item stackedLabel style={{ margin: 5 }} >
                                <Input placeholder="Name" />
                            </Item>

                            <Item stackedLabel style={{ margin: 5 }}>

                                <Input keyboardType='numeric' placeholder="Roll Number" />
                            </Item>
                            <Item stackedLabel style={{ margin: 5 }}>

                                <Input placeholder="Department" />
                            </Item>
                            <Item stackedLabel style={{ margin: 5 }}>

                                <Input keyboardType='numeric' placeholder="Year" />
                            </Item>

                        </Form>
                        <View style={{ margin: 20, paddingBottom: 5 }}>
                            <Button rounded block
                                style={{ justifyContent: 'center', backgroundColor: '#12132b' }}
                                onPress={() => {
                                    this.refs.toast.show('Submitted Successfully!', DURATION.LENGTH_LONG);
                                }}>
                                <Text style={{ color: 'white' }}>Submit</Text>
                            </Button>

                        </View>
                    </Card>

                </Content>

                <Footer>
                    <FooterTab style={{ backgroundColor: '#12132b' }}>
                        <Button onPress={() => this.props.navigation.navigate('Studentlogin')}><Text style={{ color: 'white' }}>Logout</Text></Button>
                    </FooterTab>
                </Footer>

            </LinearGradient>


        );
    }
}

export default Gatepass_Form_Screen;