import { Text, View, TouchableOpacity } from 'react-native-web';
export default function HomeScreen() {
  return (
    <TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </TouchableOpacity>
  );
}
