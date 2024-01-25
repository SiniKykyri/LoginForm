import React from 'react';
import { Button, TextInput} from 'react-native-paper';
import MainAppbar from '../components/MainAppbar';
import { StyleSheet, View } from 'react-native';

export default function Login(){

    const [formData, setFormData] = React.useState({username: '', password: ''});
    const [showError, setShowError] = React.useState(false);

    const validateAndSubmit = () => {
        setShowError(true)
        if(formData.username.length > 0 && formData.password.length > 8){
            setFormData({username:'', password:''})
            setShowError(false)
        }
    }

    return(
        <>
        <MainAppbar title="Login" />
        <View style={styles.container}>
            <TextInput 
            label="Username" 
            style={styles.input_field} 
            value={formData.username} 
            onChange={event => setFormData({...formData,username: event.nativeEvent.text})} 
            error = {formData.username.length=== 0 && showError}
            />
            <TextInput 
            label="Password" 
            style={styles.input_field} 
            keyboardType='visible-password' 
            value={formData.password} 
            onChange={event => setFormData({...formData,password:event.nativeEvent.text})}
            error = {formData.password.length < 8 && showError}
            />
            <Button 
            mode="contained" 
            style={styles.button}
            onPress={validateAndSubmit}>
            Submit </Button>
        </View>
        </>
     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        },
        input_field: {
            backgroundColor: '#fcfcfc',
            margin: (16,8,0,8)
        },
        button: {
            margin: (16,8,0,8)
        }
    });