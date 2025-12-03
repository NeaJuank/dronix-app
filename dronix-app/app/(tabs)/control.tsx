import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ControlScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de Control</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.btn}>
          <Ionicons name="arrow-up-outline" size={32} color="white" />
        </TouchableOpacity>

        <View style={styles.middleRow}>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="arrow-back-outline" size={32} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStop}>
            <Ionicons name="square" size={28} color="red" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Ionicons name="arrow-forward-outline" size={32} color="white" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Ionicons name="arrow-down-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.takeoffBtn}>
        <Text style={styles.takeoffText}>Despegar / Aterrizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonsContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#1f2630',
    padding: 18,
    borderRadius: 100,
    margin: 10,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnStop: {
    backgroundColor: '#1f2630',
    padding: 18,
    borderRadius: 100,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: 'red',
  },
  takeoffBtn: {
    marginTop: 60,
    backgroundColor: '#007aff',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  takeoffText: {
    color: 'white',
    fontSize: 18,
  },
});
