import React from 'react'
import { View, StyleSheet } from 'react-native';
import ItemNavigation from '../ItemNavigation';
import { COLOR } from '../../utils';

const BottomNavigation = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <ItemNavigation
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        )
      })}
    </View>
  );
}

export default BottomNavigation

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 55,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    elevation: 0,
    backgroundColor: COLOR.white,
    borderRadius: 20,
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  }
})
