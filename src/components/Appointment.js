import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {Status} from './Status';

export const Appointment = ({data}) => {
  return (
    <TouchableOpacity
      style={[styles.containter, {borderLeftColor: data.color_code}]}>
      <Image source={{uri: data.avatar}} style={styles.avatar} />
      <Text numberOfLines={1} style={styles.name}>
        {data.requester}
      </Text>
      <Status
        status={data.status}
        text={data.symptom}
        textColor={COLORS.lightGrey}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    borderRadius: SIZES.radius / 2,
    // borderWidth: 1,
    // borderTopColor: COLORS.lightGrey,
    // borderBottomColor: COLORS.lightGrey,
    // borderRightColor: COLORS.lightGrey,
    borderLeftWidth: 10,
    padding: SIZES.padding,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: COLORS.lightGrey,
  },
  name: {...FONTS.Roboto, fontSize: 13, fontWeight: 'bold', color: COLORS.grey},
  status: {
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    mark: {
      padding: 2,
      borderRadius: 20,
      borderWidth: 2,
      marginRight: SIZES.padding,
    },
    symptom: {
      ...FONTS.Roboto,
      fontSize: 13,
      color: COLORS.lightGrey,
    },
  },
});
