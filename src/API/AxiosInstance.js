import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = axios.create({
  baseURL: "https://api-planta.onrender.com/",
  responseType: "json",
});

export default AxiosInstance;
