import { StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <MultiSlider
        markerStyle={{ backgroundColor: 'red' }}
        selectedStyle={{ backgroundColor: 'red' }}
        sliderLength={100}
        min={0}
        max={100}
        values={[5, 50]}
        onValuesChange={() => {console.log('111')}}
      />
      <Text style={styles.title}>NAY!!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
