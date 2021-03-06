# Money On My Mind
## A Code for BTV App with sponsorship by CVOEO

## Local Environment Setup

### Requirements
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [node.js & npm](https://www.npmjs.com/get-npm)
- [java](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [expo](expo.io)
  - install expo on your computer using npm: `sudo npm install expo-cli --global`


### Clone the Repo
Get a copy of the app code using the command line: 

`$ cd [desired directory]`

`$ git clone https://github.com/codeforbtv/cvoeo-app.git`

### Run the App
- Run the npm instalation on the cvoeo-app project `$ npm install` 
- Confirm expo can run the project by typing `$ expo start`

#### View in Expo Mobile App
By using the expo mobile app, you will be able to test the app in both iOS & Android.  However, you will need a smart phone that can connect to the same network as the computer running expo.

- Download the Expo app on your phone
- Run expo with `$ expo start`
- Create an expo account at https://expo.io/signup
- Open the expo

#### View in Android Emulator
- Download and install [genymotion](https://www.genymotion.com/fun-zone/)
- Genymotion requires a virtualization tool so download [Virtualbox too](https://www.virtualbox.org/wiki/Downloads)
- Open genymotion (order is important here)
- Next run expo `$ expo start`
- On the expo webpage that comes up, click "Run on Android Device/Emulator"

Expo should be able to detect Genymotion and open an emulator for you.

#### View in iOS Emulator
Sadly, you must have a mac to run the iOS emulator.  If you're on a Windows machine, try using the expo mobile app to 

- Open Xcode if you haven’t done so already (you can get xCode through the App Store)
- Choose the Xcode menu, then choose Developer Tools and select “Simulator” to launch iOS Simulator
- Set the simulator on the commandline `$ sudo xcode-select -s /Applications/Xcode.app` (you only need to do this once)
- Run expo `$ expo start`
- In the browser window that expo opens, choose "Run on iOS Simulator" from the left sidebar