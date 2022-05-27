import { StyleSheet } from 'react-native'
import React from 'react'
import {Calendar as Calendars } from 'react-native-calendars';

const Calendar = ({ dates }) => {
	const calendarValues = () => {
		const datesObj = {};
		for (let i = 0; dates.length > i; i++) {
			const currentValue = datesObj[dates[i].dateSession]

			if (dates[i].isSessionCompleted) {
				datesObj[dates[i].dateSession] = {...currentValue, textColor: "white", color: 'rgb(98, 198, 158)' }
			}
		}
		return datesObj;
	};

  return (
    <Calendars
		 	enableSwipeMonths
			style={{ marginHorizontal:20 }}
			markingType="period"
			markedDates={calendarValues()}
		/>
  )
}

export default Calendar;

const styles = StyleSheet.create({})