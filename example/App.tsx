import { StyleSheet, Text, View } from 'react-native';

import * as MobileFinal from 'mobile-final';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{MobileFinal.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
