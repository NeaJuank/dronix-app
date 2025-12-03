import { View, Text, StyleSheet } from 'react-native';

export default function VideoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video en Vivo</Text>

      <View style={styles.videoMock}>
        <Text style={{ color: '#aaa' }}>(Stream aquí — pendiente API WebRTC)</Text>
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
  videoMock: {
    marginTop: 20,
    height: 350,
    backgroundColor: '#1f2630',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a3240',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
