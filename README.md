# :evergreen_tree: Street Ends Mobile 
Shoreline Access for Everyone

Welcome to the Street Ends mobile app Github. The Steet Ends app aims to offer you an easy and convenient resource for finding respite in the public parks that dot Seattle's waterfront, and discover the story behind the people and communities who make it all possible. This app is a work-in-progress, built using React Native for cross platform support, made by Loan Pham, David Prismantas, Alex Sutherland, Jennifer Villacis, and Andy Wilson.

## :computer: Local Deployment Instructions
For the official and most in-depth deployment instructions, reference the official React Native docs at `https://reactnative.dev/docs/environment-setup`. If you'd like to get up and running quickly, see below if you're on a Mac.

### :apple:  Deployment on a Mac


### :hammer:  Setting Up Dev Environment

To properly set up your local machine for React Native development, you will need the following:
1. Brew Package Manager
2. Node
3. Watchman
4. Appropriate JDK
5. Android Studio

To start, paste and run the following command into a terminal window to install Brew:
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
Next, install Node (if you don't have it), Watchman, and the required JDK (if you don't have it) via Brew using the following commands:
```shell
brew install node
```
```shell
brew install watchman
```
```shell
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

Next, [install Android Studio](https://developer.android.com/studio/index.html), and make sure the following items are checked during installation:
- Android SDK
- Android SDK Platform
- Android Virtual Device
- Performance (Intel ® HAXM)

Configure the Android SDK in Android Studio by opening up `Preferences` and then under `Appearance & Behavior` > `System Settings` > `Android SDK`, select the `SDK Platforms` tab, check the `Show Package Details` box in the bottom right corner, expand the `Android 10 (Q)` section, and make sure the following options are checked:

- Android SDK Platform 29
- Intel x86 Atom_64 System Image
- Google APIs Intel x86 Atom System Image

Next, select the `SDK Tools` tab, check the `Show Package Details` box, expand the `Android SDK Build-Tools` option, then ensure that 29.0.2 is selected.

Click `Apply` to install the Android SDK and tools.


### :page_facing_up:  Setting Up Your Environment Variable


Open up a terminal in your home directory, and run the following command to create a new text file:
```shell
nano .zprofile 
```
Next, paste in the following lines:
```shell
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Hit ctrl+s to save the file, and your dev environment should now be ready!

### :runner:  Running the App

Start by cloning the repo to your local machine using your preferred method. Then:
1. Open a new terminal window at your project root directory.
3. Run the following command to install the needed dependencies:
    ```shell
    npm install
    ```
4. Run the following command to start the JavaScript bundler Metro, and leave it running in the terminal window:
    ```shell
    npx react-native start
    ```
5. In a new terminal window, run the following command to launch your app in an emulator:
    ```shell
    npx react-native run-android
    ```
    
And voila, you should be seeing our app running on your emulator shortly!