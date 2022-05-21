import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {getStatusColor} from '../helpers/utils';

export const Status = ({status, text, textColor = COLORS.grey}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.mark, {borderColor: getStatusColor(status)}]} />
      <Text numberOfLines={1} style={[styles.text, {color: textColor}]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  mark: {
    padding: 1.5,
    borderRadius: 20,
    borderWidth: 3,
    marginRight: SIZES.padding,
  },
  text: {
    ...FONTS.Roboto,
    fontSize: 13,
  },
});
