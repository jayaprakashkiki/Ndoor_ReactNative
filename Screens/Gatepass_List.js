import React, { Component } from 'react';
import { Text, KeyboardAvoidingView,BackHandler } from 'react-native';
import { Header, Left, Picker, Form, Item, Input, Image, Body, Footer, FooterTab, Icon, Card, CardItem, Content, H1, H2, H5, H3, Grid, Row, Col, Right, Button, Container, Label, View } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';


class Gatepass_List_Screen extends Component {  
    
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', function() {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
            
            return true;
          });
    }

    render() {
        return (


            <LinearGradient colors={['#0f1119','#6a0582']} style={{ flex: 1 }}>

                <Header style={{ backgroundColor: '#12132b' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Studentlogin')}>
                            <Icon name="arrow-back" style={{ color: 'white', padding: 5 }} />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 20, color: 'white' }}>GatePass List</Text>
                    </Body>
                    <Right style={{ padding: 6 }}>
                   
                    </Right>  
                </Header>
              
                <Content padder>
                        <Card style={{ borderRadius: 10 }}>
                            <CardItem bordered header style={{ borderRadius: 20 }}>
                                <Left>
                                    <Text> Department : CSE </Text>
                                </Left>
                                <Right>
                                    <Text>Year : 1</Text>
                                </Right>
                            </CardItem>
                            <CardItem style={{ justifyContent: 'center' }}>

                                <Text style={{ color: '#6a0582', fontSize: 20 }}>JAYAPRAKASH P</Text>

                            </CardItem>
                            <CardItem bordered footer style={{ borderRadius: 10 }}>
                                <Left>
                                    <Text>  Roll No : 611716104010</Text>
                                </Left>
                                <Right>
                                    <Text>ID : 1111</Text>
                                </Right>
                            </CardItem>

                        </Card>

                        <Card style={{ borderRadius: 10 }}>
                            <CardItem bordered header style={{ borderRadius: 20 }}>
                                <Left>
                                    <Text> Department : CSE </Text>
                                </Left>
                                <Right>
                                    <Text>Year : 1</Text>
                                </Right>
                            </CardItem>
                            <CardItem style={{ justifyContent: 'center' }}>

                                <Text style={{ color: '#6a0582', fontSize: 20 }}>JAYAPRAKASH P</Text>

                            </CardItem>
                            <CardItem bordered footer style={{ borderRadius: 10 }}>
                                <Left>
                                    <Text>  Roll No : 611716104010</Text>
                                </Left>
                                <Right>
                                    <Text>ID : 1111</Text>
                                </Right>
                            </CardItem>

                        </Card>
                        <Card style={{ borderRadius: 10 }}>
                            <CardItem bordered header style={{ borderRadius: 20 }}>
                                <Left>
                                    <Text> Department : CSE </Text>
                                </Left>
                                <Right>
                                    <Text>Year : 1</Text>
                                </Right>
                            </CardItem>
                            <CardItem style={{ justifyContent: 'center' }}>

                                <Text style={{ color: '#6a0582', fontSize: 20 }}>JAYAPRAKASH P</Text>

                            </CardItem>
                            <CardItem bordered footer style={{ borderRadius: 10 }}>
                                <Left>
                                    <Text>  Roll No : 611716104010</Text>
                                </Left>
                                <Right>
                                    <Text>ID : 1111</Text>
                                </Right>
                            </CardItem>

                        </Card>

                        <Card style={{ borderRadius: 10 }}>
                            <CardItem bordered header style={{ borderRadius: 20 }}>
                                <Left>
                                    <Text> Department : CSE </Text>
                                </Left>
                                <Right>
                                    <Text>Year : 1</Text>
                                </Right>
                            </CardItem>
                            <CardItem style={{ justifyContent: 'center' }}>

                                <Text style={{ color: '#6a0582', fontSize: 20 }}>JAYAPRAKASH P</Text>

                            </CardItem>
                            <CardItem bordered footer style={{ borderRadius: 10 }}>
                                <Left>
                                    <Text>  Roll No : 611716104010</Text>
                                </Left>
                                <Right>
                                    <Text>ID : 1111</Text>
                                </Right>
                            </CardItem>

                        </Card>

                        <Card style={{ borderRadius: 10 }}>
                            <CardItem bordered header style={{ borderRadius: 20 }}>
                                <Left>
                                    <Text> Department : CSE </Text>
                                </Left>
                                <Right>
                                    <Text>Year : 1</Text>
                                </Right>
                            </CardItem>
                            <CardItem style={{ justifyContent: 'center' }}>

                                <Text style={{ color: '#6a0582', fontSize: 20 }}>JAYAPRAKASH P</Text>

                            </CardItem>
                            <CardItem bordered footer style={{ borderRadius: 10 }}>
                                <Left>
                                    <Text>  Roll No : 611716104010</Text>
                                </Left>
                                <Right>
                                    <Text>ID : 1111</Text>
                                </Right>
                            </CardItem>

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

export default Gatepass_List_Screen;