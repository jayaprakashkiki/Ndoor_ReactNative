import React from 'react';
import {ImageBackground,Text,BackHandler} from 'react-native';
import { Container, Footer, Header, Content, FooterTab, Button } from 'native-base';

class onboarding2 extends React.Component {
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
                <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/onboard2.png')}>
               <Header transparent></Header>
               <Content></Content>
                <Footer>
                    <FooterTab style={{backgroundColor:'#12132b'}}>
                        <Button  onPress={()=>this.props.navigation.navigate('board3')}>
                        <Text style={{color:'white'}}>Next</Text>

                        </Button>
                    </FooterTab>
                </Footer>
                </ImageBackground>
            </Container>
        );
    }
}
export default onboarding2;
