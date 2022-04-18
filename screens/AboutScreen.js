import { Text, TouchableOpacity, View } from 'react-native-web';

export default function AboutScreen({ navigation }) {
  return (
    <TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
      </View>
    </TouchableOpacity>
  );
}
