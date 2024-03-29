import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Reg = (props) => {
  const { navigation } = props;
  const [hoten, Sethoten] = useState("");
  const [username, Setusername] = useState("");
  const [sdt, setSdt] = useState("");
  const [password, Setpassword] = useState("");
  const [titleerror, Settitleerror] = useState("");
  const checkdata = () => {
    if (hoten == "" || username == "" || password == "" || sdt == "") {
      Settitleerror("Không được bỏ trống!");
    } else {
      setIsLogin(true);
    }
  };
  const goback = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Image style={styles.logo} source={require("../assets/img/Ellipse.png")} />
      <TouchableOpacity style={styles.back} activeOpacity={0.8} onPress={() => goback()}>
        <Image style={{ borderRadius: 99 }} source={require("../assets/img/back.png")} />
      </TouchableOpacity>
      <View>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Text style={styles.txtwelcome}>Đăng kí</Text>
          <Text style={styles.txtdn}>Tạo tài khoản</Text>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !hoten ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "90%" }}
              placeholder="Họ tên"
              onChangeText={(data) => {
                Sethoten(data);
                Settitleerror("");
              }}
            />
          </View>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !username ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "90%" }}
              placeholder="Email"
              onChangeText={(data) => {
                Setusername(data);
                Settitleerror("");
              }}
            />
          </View>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !sdt ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "90%" }}
              placeholder="Số điẹn thoại"
              onChangeText={(data) => {
                setSdt(data);
                Settitleerror("");
              }}
            />
          </View>
          <View
            style={[
              styles.inputpass,
              {
                borderColor: titleerror && !password ? "#CE0000" : "#8B8B8B",
              },
            ]}
          >
            <TextInput
              style={{ width: "80%" }}
              placeholder="Mật khẩu"
              onChangeText={(data) => {
                Setpassword(data);
                Settitleerror("");
              }}
            />
            <Image
              style={{ width: 29, height: 24 }}
              source={require("../assets/img/eye_off.png")}
            />
          </View>
          {!!titleerror && <Text style={styles.txt1}>Không được bỏ trống!</Text>}
          <Text style={styles.txtagre}>
            Để đăng ký tài khoản, bạn đồng ý{" "}
            <Text style={{ color: "#009245", textDecorationLine: "underline" }}>
              Terms & Conditions
            </Text>{" "}
            and{" "}
            <Text style={{ color: "#009245", textDecorationLine: "underline" }}>
              Privacy Policy
            </Text>
          </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => checkdata()}>
            <LinearGradient
              colors={["#007537", "#4CAF50"]}
              style={styles.btn}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.btndn}>Đăng kí</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.lineor}>
            <LinearGradient
              style={styles.line}
              colors={["#007537", "#4CAF50"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text></Text>
            </LinearGradient>
            <Text style={styles.or}>Hoặc</Text>
            <LinearGradient
              style={styles.line}
              colors={["#007537", "#4CAF50"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text></Text>
            </LinearGradient>
          </View>
          <View style={styles.morelogin}>
            <Image style={{ width: 32, height: 32 }} source={require("../assets/img/gg.png")} />
            <Image style={{ width: 32, height: 32 }} source={require("../assets/img/fb.png")} />
          </View>
          <Text style={[styles.txtdk, { color: "black" }]}>
            Tôi đã có tài khoản <Text style={[styles.txtdk, { color: "#009245" }]}>Đăng nhập</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Reg;

const styles = StyleSheet.create({
  txt1: {
    color: "#CE0000",
    fontSize: 14,
    fontFamily: "DesignerVN-Poppins-Regular",
  },
  txtagre: {
    color: "black",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "DesignerVN-Poppins-Regular",
  },
  or: {
    marginLeft: 10,
    marginRight: 10,
    color: "black",
    fontFamily: "DesignerVN-Poppins-Regular",
  },
  txtdk: {
    // Tạo tài khoán
    marginTop: height >= 712 ? height * 0.02 : height * 0.02,
    fontFamily: "DesignerVN-Poppins-Regular",
    alignSelf: "center",
  },
  morelogin: {
    alignSelf: "center",
    width: "60%",
    flexDirection: "row",
    marginTop: height >= 712 ? height * 0.02 : height * 0.002,
    justifyContent: "space-around",
  },
  btndn: {
    // Đăng nhập
    color: "white",
    fontSize: 20,
    fontFamily: "DesignerVN-Poppins-ExtraBold",
  },
  btn: {
    width: "100%",
    height: height >= 712 ? height * 0.07 : height * 0.06,
    marginTop: height * 0.02,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 21,
  },

  inputpass: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 10,
    height: height * 0.065,
  },
  input: {
    borderWidth: 1,
    borderColor: "#8B8B8B",
    padding: 14,
    borderRadius: 10,
  },
  txtdn: {
    // Đăng nhập tài khoản
    color: "black",
    fontSize: 18,
    fontFamily: "DesignerVN-Poppins-Regular",
    alignSelf: "center",
    marginBottom: height >= 712 ? height * 0.04 : height * 0.001,
  },
  back: {
    marginTop: height * 0.06,
    marginLeft: height * 0.02,
    position: "absolute",
    zIndex: 1,
    width: 32,
    height: 32,
  },
  txtwelcome: {
    // Chào mừng bạn
    color: "black",
    fontSize: 30,
    fontFamily: "DesignerVN-Poppins-ExtraBold",
    alignSelf: "center",
    marginTop: -30,
  },
  lineor: {
    width: "100%",
    marginTop: height >= 712 ? height * 0.01 : height * 0.001,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  line: {
    width: width * 0.3,
    height: 2,
  },
  logo: {
    resizeMode: "cover",
    width: "100%",
    height: height * 0.5,
    marginTop: height >= 712 ? -height / 4 : -height / 3.5,
  },
});
console.log(`manhinh dk${height} 768x992`);
