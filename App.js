import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Application mobile avec différents boutons</Text>
      <CustomBtn text="Bouton 1" type="primary" />
      <CustomBtn text="Bouton 2" type="secondary" />
      <CustomBtn text="Bouton 3" type="success" />
      <CustomBtn text="Bouton 4" type="danger" />
      <CustomBtn text="Bouton 5" type="warning" />
      <CustomBtn text="Bouton 6" type="info" />
      <CustomBtn text="Bouton 7"  />
      <StatusBar style="auto" />
    </View>
  );
}

/**
 * Composant pour gerer un bouton. Il va prendre en props le texte et le style du bouton
 */
const CustomBtn = ({ text, type }) => {
  let color = ""
  switch (type) {
    case 'primary':
      color = '#0d6efd'
      break
    case 'secondary':
      color = '#5c636a'
      break
    case 'success':
      color = '#157347'
      break
    case 'danger':
      color = '#dc3545'
      break
    case 'warning':
      color = '#ffc107'
      break
    case 'info':
      color = '#0dcaf0'
      break
    default:
      color = '#f5f5f5'
      break
  }
  const btnStyle = { ...styles.btn, backgroundColor: color, borderColor: color }
  return (
    <TouchableOpacity style={btnStyle}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#0d6efd',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0d6efd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
