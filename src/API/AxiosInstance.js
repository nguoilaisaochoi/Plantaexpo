import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = axios.create({
  baseURL: "http://192.168.140.85:3000/",
  responseType: "json",
});

export default AxiosInstance;
