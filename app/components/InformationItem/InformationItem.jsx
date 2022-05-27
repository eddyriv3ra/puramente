import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InformationItem = ({icon, desc, value}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={24} color="black" />
      <Text style={styles.desc}>{desc}</Text>
      <Text style={{ color: "rgb(234, 134, 118)" }}>{value}</Text>
    </View>
  )
}

export default InformationItem

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: "center",
    marginHorizontal: 10
  }, 
  desc: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500"
  }
})