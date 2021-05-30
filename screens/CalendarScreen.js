import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import React from 'react';

function CalendarScreen(navigation) {
    return (
        <View style={styles.container}>

	    <View style={styles.calendar}>
	    <CalendarList
	    // Callback which gets executed when visible months change in scroll view. Default = undefined
	    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
	    // Max amount of months allowed to scroll to the past. Default = 50
	    pastScrollRange={1}
	    // Max amount of months allowed to scroll to the future. Default = 50
	    futureScrollRange={4}
	    // Enable or disable scrolling of calendar list
	    scrollEnabled={true}
	    // Enable or disable vertical scroll indicator. Default = false
	    showScrollIndicator={true}

	    // grey out all days before today because no need
	    minDate={new Date()}

	    // Change this to access json object returned from user click on day
	    onDayPress={(day) => {
		    // console.log('DAY PRESSED: ', day);
	    }}


	    markedDates={{
	    	'markedDate' : {selected: true, selectedColor: 'blue'}
	    }}

	    />
	    </View>
        </View>

    );
}

export default CalendarScreen;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		backgroundColor: '#F4F4F4'
	},
	calendar: {
		width: '100%',
		height: '100%',
	},
	footer: {
		flex: 5,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	footerText: {
		fontSize: 20,
		textAlign: 'center',
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: '#031926'
	},
	headerText: {
		color: '#f4e9cd',
		fontSize: 40
	}
})
