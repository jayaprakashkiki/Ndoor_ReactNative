import React from 'react';
import { Text, Image, KeyboardAvoidingView,BackHandler } from 'react-native';
import { Content, Form, Item, Icon, Input, H1, Button, Header, Container, View, Left, Body, } from 'native-base';
import {Ionicons,EvilIcons,AntDesign,FontAwesome} from '@expo/vector-icons'

class Student_Login_Screen extends React.Component {
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', function() {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
            
            return true;
          });
    }
    render() {
        return (
            <Container>
                <Header transparent style={{ backgroundColor: '#12132b' }}>
                    <Left style={{ paddingLeft: 10 }}>
                        <Button transparent onPress={()=>this.props.navigation.navigate('StudentAdmin')}>
                        <AntDesign name="leftcircleo" size={32} color="white"/>
                        </Button>
                    </Left>
                    <Body />
                </Header>

                <Content padder style={{ backgroundColor: '#12132b' }}>
                    <KeyboardAvoidingView behavior="position">
                        <Form style={{ alignItems: "center", paddingTop: 0, margin: 15 }}>
                            <Image style={{ width: 75, height: 100, marginBottom: 50, borderRadius: 10 }} source={require('../assets/ndoor_icon.png')}></Image>
                            <H1 style={{ color: 'white', marginBottom: 30 }}>Student Login</H1>

                            <Item rounded style={{ marginBottom: 30, backgroundColor: 'white' }}>
                                <Icon style={{ color: '#12132b' }} name="person" />
                                <Input onChangeText={text => this.setState({ username: text })} placeholder="Username" style={{ color: "black" }} />
                            </Item>

                            <Item rounded style={{ marginBottom: 10, backgroundColor: 'white' }}>
                                <Icon style={{ color: '#12132b' }} name="key" />
                                <Input secureTextEntry={true} onChangeText={text => this.setState({ password: text })} placeholder="Password" style={{ color: "black", shadowColor: 'red', shadowOpacity: 5 }} />
                            </Item>
                        </Form>


                        <Button onPress={() => this.props.navigation.navigate('GatepassFormScreen')} bordered light block style={{ margin: 20, borderRadius: 10 }}>
                            <Text style={{ alignItems: "center", color: "white" }}>Login</Text>
                        </Button>

                        <Text style={{ textAlign: "center", color: 'white' }}>Need Help ?</Text>
                    </KeyboardAvoidingView>
                </Content>
            </Container>



        );
    }
}

export default Student_Login_Screen;