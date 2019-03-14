import Reactotron from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "127.0.0.1" }) // Your local IP Adrress - Run command "npm run rtt-reverse" before "npm start"
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
} else {
  console.tron = () => {
    return false;
  };
}
