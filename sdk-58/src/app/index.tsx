import { Link, useNavigation } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const routes = useNavigation().getState()?.routes
  const [count, setCount] = useState(0)
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Routes: {JSON.stringify(routes)}</Text>
      <Text style={{marginBottom: 20}}>Routes length: {routes?.length}</Text>
      <TouchableOpacity onPress={() => setCount(count => count + 1)} style={{padding: 10, borderWidth: 1, borderColor: 'black', marginBottom: 10}}>
        <Text>Click me to increase count: {count}</Text>
      </TouchableOpacity>
      <Link href="/pagetwo" style={{padding: 10, borderWidth: 1, borderColor: 'black'}}>Click this to go to page two</Link>
    </View>
  )
}