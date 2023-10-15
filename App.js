

import React, { useState } from "react"
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native"

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen"

const App = () => {
  //  const [name, setName] = useState('Ezgi')
  //  const [session, setSession] = useState({ number: 6, title: 'state'})
  //  const [current, setCurrent] = useState(true)
  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  const onClickHandler = () => {
    setCounter(counter + 1)
    setNumber(number + 5)
  }

  return (
    <View style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.row3}>
      <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.row4}>
      <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    //width: 300 // '100%'
    //height: 150 // '50%'
    backgroundColor: "#ff55aa",
    alignItems: 'strech',
    justifyContent: 'center',
    flexDirection: 'column'
    // borderWidth: 5,
    // borderColor: '#551111',
    // borderRadius: 5,
    // margin: 40
  },
  row1: {
    flex: 1,
    backgroundColor: "#00ffff",
    alignItems: 'strech',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  row2: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: 'center',
    justifyContent: 'center',

  },
  row3: {
    flex: 1,
    backgroundColor: "#00ff00",
    alignItems: 'center',
    justifyContent: 'center'
  },
  row4: {
    flex: 7,
    backgroundColor: "#ffffff",
    alignItems: 'strech',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  view1: {
    flex: 1,
    backgroundColor: "#00ffff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 2,
    backgroundColor: "#ff00ff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 3,
    backgroundColor: "#ffff00",
    alignItems: 'center',
    justifyContent: 'center'
  },
  view4: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: 'center',
    justifyContent: 'center'
  },
  view5: {
    flex: 1,
    backgroundColor: "#00ff00",
    alignItems: 'center',
    justifyContent: 'center'
  },
  view6: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  view7: {
    flex: 1,
    backgroundColor: "#0000ff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
})

export default App