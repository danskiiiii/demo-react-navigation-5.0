import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './tab-bar-icon.styles';

export const TabBarIcon = ({
  focused,
  name,
  size = 18,
  solid = true,
  testID,
  counter,
}) => {
  return (
    <View style={[styles.wrapper, focused && styles.wrapperActive]}>
      {typeof counter === 'number' && counter ? (
        <View style={styles.counterWrap}>
          <Text style={styles.counterText}>{counter > 9 ? '9+' : counter}</Text>
        </View>
      ) : null}
      <Icon
        name={name}
        size={size}
        color={focused ? 'white' : 'grey'}
        style={styles.icon}
        solid={solid}
        testID={testID}
      />
    </View>
  );
};
