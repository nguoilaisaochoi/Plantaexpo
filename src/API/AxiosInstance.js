import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = axios.create({
  baseURL: "http://192.168.1.104:3000/",
  responseType: "json",
  withCredentials: "true",
});

export default AxiosInstance;
