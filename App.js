import React, { Component } from 'react';
import { Alert, TouchableOpacity, TextInput, View, StyleSheet, Image, Text, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      status:false,
      status2:false,
      status3:true,
    };
  }
  
  onLogin() {
    const { email, password, status, status2 } = this.state;
    var value2 = password.length.toString();

    let reg2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg2.test(email) === false)
    {
      this.setState({status: true})
      return false;
    }
    else if (value2 < 6)
    {
      this.setState({status2: true})
    }
    else if (value2 > 12)
    {
      this.setState({status2: true})
    }
    else
    {
      Alert.alert('Message', `You have successfully logged in!`);
    }


    
  }
  
  evalidation()
  {
    const { email, status, status2 } = this.state;

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email) === true)
    {
      this.setState({status: false})
      return false;
    }
    else if (email==='')
    {
      this.setState({status: false})
    }
    else
    {
      this.setState({status: true})
    }

    if (status === true && status2 === true)
    {
      this.setState({status3: true})
    }
    else
    {
      this.setState({status3: false})
    }
  }

  pvalidation()
  {
    const { password, status, status2 } = this.state;
    var value = password.length.toString();
    if (value < 5)
    {
      this.setState({status2: true})
    }
    else if (value > 11)
    {
      this.setState({status2: true})
    }
    else
    {
      this.setState({status2: false})
    }

    if (status === true && status2 === true)
    {
      this.setState({status3: true})
    }
    else
    {
      this.setState({status3: false})
    }
  }
    
  

  render() {
    const { status3, email, password } = this.state;
    
    return (
      <KeyboardAvoidingView style={styles.maincontainer} behavior="position" enabled>
        <ScrollView>
          <View>
            <StatusBar
              barStyle="dark-content"
            />
          </View>
          
          <View style={styles.container}>
            <Image source={require('./image/logo.png')} style={{marginBottom:130, maxWidth:250, maxHeight:170}} />

            <View> 
              <Text style={{fontWeight:'bold', fontSize:18}}>Email</Text>
              <TextInput
                underlineColorAndroid={'transparent'}
                value={this.state.email }
                onChangeText={(email) => this.setState({ email })}
                placeholder={'Input email address'}
                onChange={this.evalidation.bind(this)}
                style={styles.input}
              />
              <View>
                {
                  this.state.status ? <Text style={{color: 'red', fontStyle: 'italic', position: 'absolute', fontSize:10}}>not correct format for email address</Text> : null
                }
              </View>

              <Text style={{fontWeight:'bold', fontSize:18, marginTop: 10}}>Password</Text>
              <TextInput
                underlineColorAndroid={'transparent'}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Input password'}
                onChange={this.pvalidation.bind(this)}
                secureTextEntry={true}
                style={styles.input}
              />
              <View>
                {
                  this.state.status2 ? <Text style={{color: 'red', marginBottom: 20,  fontStyle: 'italic', position: 'absolute', fontSize:10}}>please use at least 6 - 12 characters</Text> : null
                }
              </View>

              <TouchableOpacity style={styles.btn}
                disabled={status3 || !email || !password}
                onPress={this.onLogin.bind(this)}>
                <Text style={{fontWeight:'bold', fontSize:18, color: 'white'}}> Sign In </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    marginTop:20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginBottom: 20,
  },
  input: {
    width: 320,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8151ad',
    borderRadius:3,
  },
  btn: {
    width: 320,
    height: 44,
    alignItems: 'center',
    backgroundColor: '#8151ad',
    padding: 10,
    borderRadius:3,
    marginTop: 30,
  },
});