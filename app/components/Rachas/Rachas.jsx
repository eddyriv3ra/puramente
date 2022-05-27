import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rachas = ({rachas}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{rachas}</Text>
      <Text style={styles.text}>DÍAS DE RACHA</Text>
    </View>
  )
}

export default Rachas

const styles = StyleSheet.create({
  container: {
		backgroundColor: "rgb(234, 134, 118)",
		width: "70%",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10
	},
	text: {
		color: "white"
	}
})