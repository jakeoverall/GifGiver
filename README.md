# Gif Giver
A react-native app
==================

To get up and running with react-native follow this [quickstart]('https://facebook.github.io/react-native/docs/getting-started.html#content').

If you have any issues check the [troubleshooting guide]('https://facebook.github.io/react-native/docs/troubleshooting.html#content')

Tools Needed.

+ Mac :(
+ Xcode
+ Node.js
+ homebrew
+ react-native-cli
+ Basic understanding of React

###Initializing the app

Lets scafold out the few files we are going to need for our demo app.

```
 $> react-native init GifGiver
 $> cd GifGiver
 $> touch Main.js
 $> cd Results.js
 $> cd api.js
```

**index.ios.js and Xcode**
The index.ios.js file is the apps entry point and tie between your react-native app and your Xcode project. 

**ES5 || ES6**
Who cares? Use what is most readable for you and your team.

**React-Native is not React well kinda**
One of the most important things to understand and realize when you are writing react-native is there is no DOM. React-native is not a web browser application. Fortunately thanks to the react-native team we still get to write JavaScript and we only have to learn a few new jsx elements.

**React-Native Cheat Sheet**
+ <View> - Essentially <div>
+ <ScrollView> - Yeah no scroll overflow handler without this
+ <TouchableHighlight onPress={}> - <button>
+ <Text> - **All** text must be wrapped with this Tag
+ <TextInput onChange={}> - <input>
+ <Image source={{uri: ''}}> - <img>

**React-Native Utilities**
+ AsyncStorage - localstorage promised based
+ Fetch - No Ajax
+ XMLHttpRequest - If you don't like fetch
+ AppRegistry - Comm layer between app and objective-c
+ StyleSheet - camelCassed CSS
+ FlexBox - 99.9% of positioning should be done with flexbox
+ VibrationIOS - If the device supports vibrations
