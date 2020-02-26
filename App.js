import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar, View, Text, SafeAreaView, Button } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useFocusEffect,
  useIsFocused,
  useRoute,
  useScrollToTop,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TabBarIcon } from './components/tab-bar-icon/tab-bar-icon';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, getCurrentRoute } from './navigation-service';

const screenStyle = {
  backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};

const textStyle = { color: 'white', marginBottom: 15 };

const headerStyles = {
  headerStyle: {
    backgroundColor: 'black',
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  headerTintColor: 'white',
};

// export default function App() {
//   const [route, setRoute] = React.useState('ScreenA');
//   switch (route) {
//     case 'ScreenA':
//       return <ScreenA onChangeRoute={setRoute} />;
//     case 'ScreenB':
//       return <ScreenB onChangeRoute={setRoute} />;
//   }
// }
// const ScreenA = ({ onChangeRoute }) => {
//   return (
//     <View style={screenStyle}>
//       <Text style={textStyle}>Screen A</Text>
//       <Button
//         title="Go to ScreenB"
//         onPress={() => {
//           onChangeRoute('ScreenB');
//         }}
//       />
//     </View>
//   );
// };
// const ScreenB = ({ onChangeRoute }) => {
//   return (
//     <View style={screenStyle}>
//       <Text style={textStyle}>Screen B</Text>
//       <Button
//         title="Go to ScreenA"
//         onPress={() => {
//           onChangeRoute('ScreenA');
//         }}
//       />
//     </View>
//   );
// };

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <NavigationContainer ref={navigationRef}>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

const MaterialBottomTabs = createMaterialBottomTabNavigator();

const MaterialTopTabsNav = createMaterialTopTabNavigator();

const BottomTabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabsNav"
      drawerStyle={{
        backgroundColor: 'lightgrey',
      }}>
      <Drawer.Screen
        name="Stack"
        component={StackNav}
        options={{ drawerLabel: 'Stack' }}
      />
      <Drawer.Screen
        name="BottomTabsNav"
        component={BottomTabsNav}
        options={{ drawerLabel: 'BottomTabsNav' }}
      />
      <Drawer.Screen
        name="MaterialBottomTabsNav"
        component={MaterialBottomTabsNav}
        options={{ drawerLabel: 'Material Bottom Tabs Nav' }}
      />
      <Drawer.Screen
        name="MaterialTopTabs"
        component={MaterialTopTabs}
        options={{ drawerLabel: 'MaterialTopTabs' }}
      />
    </Drawer.Navigator>
  );
}

export function BottomTabsNav() {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'orange',
          borderTopWidth: 2,
        },
      }}
      backBehavior="initialRoute"
      unmountOnBlur={false}
      lazy={false}>
      <BottomTabs.Screen
        name="Horse"
        component={GenericScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: () => (
              <TabBarIcon name="horse" focused={navigation.isFocused()} />
            ),
          };
        }}
      />
      <BottomTabs.Screen
        name="Cat"
        component={GenericScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: () => (
              <TabBarIcon name="cat" focused={navigation.isFocused()} />
            ),
          };
        }}
      />
      <BottomTabs.Screen
        name="Crow"
        component={GenericScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: () => (
              <TabBarIcon name="crow" focused={navigation.isFocused()} />
            ),
          };
        }}
      />
    </BottomTabs.Navigator>
  );
}

export function MaterialBottomTabsNav() {
  return (
    <MaterialBottomTabs.Navigator
      shifting
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: 'black' }}
      backBehavior="initialRoute">
      <MaterialBottomTabs.Screen
        name="Horse"
        component={GenericScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: () => (
              <TabBarIcon name="horse" focused={navigation.isFocused()} />
            ),
          };
        }}
      />

      <MaterialBottomTabs.Screen
        name="Cat"
        component={GenericScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: () => (
              <TabBarIcon name="cat" focused={navigation.isFocused()} />
            ),
          };
        }}
      />

      <MaterialBottomTabs.Screen
        name="Crow"
        component={GenericScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: () => (
              <TabBarIcon name="crow" focused={navigation.isFocused()} />
            ),
          };
        }}
      />
    </MaterialBottomTabs.Navigator>
  );
}

export function MaterialTopTabs() {
  return (
    <MaterialTopTabsNav.Navigator
      tabBarPosition="bottom"
      initialRouteName="Cat"
      tabBarOptions={{
        labelStyle: { fontSize: 15 },
        activeTintColor: 'orange',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: 'black',
          borderTopColor: 'orange',
          borderTopWidth: 2,
        },
        indicatorStyle: {
          backgroundColor: 'orange',
        },
      }}>
      <MaterialTopTabsNav.Screen name="Horse" component={GenericScreen} />
      <MaterialTopTabsNav.Screen name="Cat" component={GenericScreen} />
      <MaterialTopTabsNav.Screen name="Crow" component={GenericScreen} />
    </MaterialTopTabsNav.Navigator>
  );
}

const GenericScreen = ({ navigation, route }) => {
  return (
    <View style={screenStyle}>
      {route.name ? (
        <Icon
          style={{ color: 'white', marginBottom: 30 }}
          size={100}
          name={route.name.toLowerCase()}
        />
      ) : null}
      <Text style={{ color: 'white' }}>{JSON.stringify(route)}</Text>

      <Button
        title="Toggle Drawer"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </View>
  );
};

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          ...headerStyles,
          headerTitleAlign: 'left',
          headerRight: () => (
            <Icon size={20} name="dog" color="orange" style={{ padding: 10 }} />
          ),
          // headerLeft: () => (
          //   <Icon size={20} name="cat" color="pink" style={{ padding: 10 }} />
          // ),
        }}
        name="Screen1"
        component={Screen1}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{
          ...headerStyles,
        }}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={({ route }) => ({
          ...headerStyles,
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}

const Screen1 = ({ navigation, route }) => {
  return (
    <View style={screenStyle}>
      <Text style={textStyle}>Screen 1</Text>
      <Text style={textStyle}>{JSON.stringify(route)}</Text>
      <Button
        title="Go to Screen2"
        onPress={() => {
          navigation.navigate('Screen2');
        }}
      />
    </View>
  );
};

const Screen2 = ({ navigation, route }) => {
  const [focusCount, setFocusCount] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      setFocusCount(prev => prev + 1);
    }, []),
  );
  return (
    <View style={screenStyle}>
      <Text style={textStyle}>Screen 2</Text>
      <Text style={textStyle}>focus counter: {focusCount}</Text>
      <Text style={textStyle}>{JSON.stringify(route)}</Text>
      <Button
        title="To Screen3"
        onPress={() => {
          navigation.navigate('Screen3', { title: 'S3' });
        }}
      />
    </View>
  );
};

const Screen3 = ({ navigation, route }) => {
  return (
    <View style={screenStyle}>
      <Text style={textStyle}>Screen 3</Text>
      <Text style={textStyle}>{JSON.stringify(route)}</Text>

      <Button
        title="To Screen2"
        onPress={() => {
          navigation.navigate('Screen2', { paramName: 'test' });
        }}
      />
      <Button
        title="Toggle Drawer"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <Button
        title="popToTop"
        onPress={() => {
          navigation.popToTop();
        }}
      />

      <Button
        title="setParams"
        onPress={() =>
          navigation.setParams({
            number: randomNum(),
          })
        }
      />

      <ChildComponent />
    </View>
  );
};

const ChildComponent = ({ navigation, route }) => {
  const navigationHook = useNavigation();
  const routeHook = useRoute();

  return (
    <View
      style={{
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'grey',
        height: 200,
        width: 300,
        borderRadius: 30,
      }}>
      <Text style={{ fontSize: 20 }}>ChildComponent</Text>
      <Text>navigation: {typeof navigation}</Text>
      <Text>navigationHook: {typeof navigationHook}</Text>
      <Text>route: {typeof route}</Text>
      <Text>routeHook: {typeof routeHook}</Text>
      <Text>{JSON.stringify(routeHook)}</Text>
      <Button
        title="Toggle Drawer"
        color="orange"
        onPress={() => {
          navigationHook.toggleDrawer();
        }}
      />
    </View>
  );
};

function randomNum() {
  return Math.ceil(Math.random() * (100 - 1) + 1);
}
