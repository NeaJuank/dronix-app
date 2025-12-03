import { View, Text, StyleSheet } from 'react-native';

export default function TelemetriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Telemetría del Dron</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Altitud:</Text>
        <Text style={styles.value}>-- m</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Batería:</Text>
        <Text style={styles.value}>-- %</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>GPS:</Text>
        <Text style={styles.value}>Lat: --  |  Lon: --</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Velocidad:</Text>
        <Text style={styles.value}>-- m/s</Text>
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
  card: {
    marginTop: 20,
    backgroundColor: '#1f2630',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2a3240',
  },
  label: {
    color: '#aaa',
    fontSize: 16,
  },
  value: {
    color: 'white',
    fontSize: 20,
    marginTop: 4,
  },
});
