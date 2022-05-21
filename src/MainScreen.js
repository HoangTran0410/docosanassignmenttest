import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {Appointment} from './components/Appointment';
import {Status} from './components/Status';
import {COLORS, FONTS, MOCK_DATA, SIZES} from './constants';

export const MainScreen = ({}) => {
  const [data, setData] = React.useState(MOCK_DATA.data);

  const allAppointments = React.useMemo(() => {
    return data.reduce(
      (acc, curr) => [...acc, ...curr.appoitment_calendar],
      [],
    );
  }, [data]);

  const calendar = React.useMemo(() => {
    const hours = Array.from(Array(24).keys());

    return hours.map(hour => ({
      hour: `${hour}:00`,
      appointments: allAppointments.filter(d => {
        const time = moment(d.start_time);
        return time.toDate().getHours() == hour;
      }),
    }));
  }, [allAppointments]);

  const renderAppointmentItem = React.useCallback(({item}) => {
    return (
      <View style={styles.flatList.item.container}>
        <View style={styles.flatList.item.hour.container}>
          <Text style={styles.flatList.item.hour.text}>{item.hour}</Text>
        </View>
        <View style={styles.flatList.item.appointments.container}>
          {item.appointments.length > 0 && (
            <View style={styles.flatList.item.appointments.innerContainer}>
              {item.appointments.map((appointment, index) => (
                <Appointment key={index} data={appointment} />
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/*#region Header */}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.green, COLORS.blue]}
        style={styles.header.container}>
        <Text style={styles.header.text}>Lịch khám ngày 12/10/2020</Text>
      </LinearGradient>
      {/*#endregion */}

      {/*#region Body */}
      <FlatList
        style={styles.flatList.container}
        data={calendar}
        renderItem={renderAppointmentItem}
        ListHeaderComponent={<View style={styles.flatList.header} />}
      />
      {/*#endregion */}

      {/*#region Footer */}
      <View style={styles.statues.container}>
        <View style={styles.statues.innerContainer}>
          {['Passed', 'Pending', 'Approved'].map((item, index) => {
            return <Status key={index} status={item} text={item} />;
          })}
        </View>
      </View>
      {/*#endregion */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    container: {
      paddingVertical: SIZES.padding * 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...FONTS.Roboto,
      fontSize: 17,
      color: 'white',
    },
  },
  flatList: {
    header: {
      padding: 10,
    },

    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    item: {
      container: {
        flexDirection: 'row',
        height: 90,
        paddingHorizontal: SIZES.padding,
        borderColor: COLORS.lightGrey,
        borderTopWidth: 1,
      },
      hour: {
        container: {
          position: 'absolute',
          top: -12,
          paddingHorizontal: SIZES.padding,
          backgroundColor: 'white',
        },
        text: {
          ...FONTS.Roboto,
          fontWeight: 'bold',
          fontSize: 13,
          color: COLORS.grey,
        },
      },
      appointments: {
        container: {
          borderColor: COLORS.lightGrey,
          borderLeftWidth: 1,
          marginLeft: 50,
          padding: SIZES.padding,
          flex: 1,
        },
        innerContainer: {
          borderWidth: 1,
          borderLeftWidth: 0,
          borderColor: COLORS.lightGrey,
          borderRadius: SIZES.radius,
          flexDirection: 'row',
          flex: 1,
        },
      },
    },
  },
  statues: {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: SIZES.padding * 2,
      borderTopColor: COLORS.lightGrey,
      borderTopWidth: 1,
    },
    innerContainer: {
      flexDirection: 'row',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: COLORS.blue,
      padding: SIZES.padding,
    },
  },
});
