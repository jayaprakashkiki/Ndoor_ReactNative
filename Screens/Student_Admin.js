import React from 'react';
import { Text, Image,BackHandler } from 'react-native';
import { Content, Form, Item, Icon, Input, H1,H2, Button,} from 'native-base';
class Student_Admin_Screen extends React.Component {

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', function() {
            // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
            // Typically you would use the navigator here to go to the last state.
            
            return true;
          });
    }
    render() {
        return (

            <Content padder style={{ backgroundColor: '#12132b' }}>

                <Form style={{ alignItems: "center", paddingTop: 50, margin: 15 }}>
                    <Image style={{ width: 75, height: 100, marginBottom: 50, borderRadius: 10 }} source={require('../assets/ndoor_icon.png')}></Image>
                    <H2 style={{ color: 'white', marginBottom: 10, textAlign:'center',lineHeight:40 }}>WE PROVIDE A SECURE GATEWAY - NSIT CAMPUS</H2>
                </Form>


                <Button onPress={()=>this.props.navigation.navigate('Studentlogin')} bordered light block style={{ margin: 20, borderRadius: 10 }}>
                    <Text style={{ alignItems: "center", color: "white" }}>Student</Text>
                </Button>
                <Button onPress={()=>this.props.navigation.navigate('Adminlogin')} bordered light block style={{ margin: 20, borderRadius: 10 }}>
                    <Text style={{ alignItems: "center", color: "white" }}>Admin</Text>
                </Button>

                <Text style={{ textAlign: "center", color: 'white' }}>Need Help ?</Text>

            </Content>




        );
    }
}

export default Student_Admin_Screen;