import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Rachas from '../../components/Rachas/Rachas'
import InformationItem from '../../components/InformationItem'
import Calendar from '../../components/Calendar'
import { maxRachas, parseData, racha } from '../../utils'

const informationValues = [
	{
		icon: "flower-tulip",
		desc: "Sesiones completadas"
	},
	{
		icon: "triangle",
		desc: "Máxima racha"
	},
	{
		icon: "clock",
		desc: "Horas meditando"
	}
]

const Progress = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const getData = async () => {
			try {
				const response =  await fetch(
					"https://gist.githubusercontent.com/nahuelb/0af04ce9aadab10afe2f37ba566070c2/raw/47effc9a678e9616369b56eeeb4ee54f22763b21/sessions.json"
				)
				const responseJson = await response.json();
				const newData = responseJson.map((response) => {
					return {
						...response,
						dateSession: response?.dateSession?.split('T')[0]
					}
				});
				setData(parseData(newData))
			} catch (error) {
				console.error(error);
			}
		}
		getData()
	}, [])

  return (
    <View style={styles.container}>
		<View style={styles.rachasContainer}>
      	<Rachas rachas={racha(data)}/>
				<View style={styles.informationContainer}>
					{informationValues.map(({icon, desc}, index) => {
						return (
							<InformationItem key={index} icon={icon} desc={desc} value={index === 1 ? maxRachas(data) : 153}/>
						)
					})}
				</View>
			</View>
			<Calendar dates={data}/>
    </View>
  )
}

export default Progress

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rachasContainer: {
		alignItems: "center",
		marginVertical: 30
	},
	informationContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 30,
	}
})