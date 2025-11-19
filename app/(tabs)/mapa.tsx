import { View, Text, StyleSheet } from 'react-native';

export default function MapaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa</Text>

      <View style={styles.mapMock}>
        <Text style={{ color: '#aaa' }}>(Mapa aquí — pendiente API)</Text>
      </View>
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
  },
  mapMock: {
    marginTop: 20,
    height: 400,
    backgroundColor: '#1f2630',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a3240',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
