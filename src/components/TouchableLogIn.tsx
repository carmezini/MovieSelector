import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function TouchableLogIn() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
            colors={['#D96AFF', '#371044']}
            start={[0,0]}
            end={[0,1]}
            style={styles.gradient}>
          <Text style={styles.text}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  button: {
    width: 183,
    height: 63,
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  },
});
