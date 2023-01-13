import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import ViewShot from "react-native-view-shot";

const App = () => {
  const captureRef = useRef(null)
  const rotation = Gesture.Pan().onEnd((res) => {
    console.log('rotation starts...', res);
    captureRef.current.capture().then(uri => {
      console.log("screenshot url is... ", uri);
      alert(`Screenshot utl is\n`, uri)
    });
  });
  return (
    <ViewShot ref={captureRef} style={styles.container} options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}>
      <GestureDetector gesture={rotation}>
        <View style={styles.container}>
          <Text style={{ color: 'white' }}>Hello There</Text>
        </View>
      </GestureDetector>
    </ViewShot>

  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141115',
    paddingHorizontal: 20,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});