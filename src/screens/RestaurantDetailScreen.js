import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import yelp from "../api/yelp";
import MyText from "../components/MyText";

const window = Dimensions.get("window");

const RestaurantDetailScreen = (props) => {
  const id = props.route.params;

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchRestaurantDetail = async () => {
    const response = await yelp.get(`/${id}`);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurantDetail();
  }, []);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  const getDay = (day) => {
    const days = {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday",
    };
    return days[day];
  };

  const formatTime = (time) => {
    return [time.slice(0, 2), ".", time.slice(2)].join("");
  };

  const styles = StyleSheet.create({
    image: {
      height: 200,
      resizeMode: "cover",
    },
    flex_row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    flex_row_card: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    flex_row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    info_text: {
      fontWeight: "bold",
      fontSize: 16,
      marginLeft: 5,
    },
    section_spacing: {
      marginTop: 5,
    },
    mt_10: {
      marginTop: 10,
    },
    mb_10: {
      marginBottom: 10,
    },
    loading_container: {
      flex: 1,
      justifyContent: "center",
    },
    card: {
      backgroundColor: "white",
      padding: 30,
      borderRadius: 10,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: -10 },
      shadowOpacity: 0.4,
      shadowRadius: 6,
      elevation: 4,
      marginVertical: 20,
    },
    hours: {
      justifyContent: "space-between",
      marginVertical: 2,
    },
  });

  return !isLoading ? (
    <ScrollView>
      <Carousel
        data={data.photos}
        renderItem={_renderItem}
        sliderWidth={window.width}
        itemWidth={window.width}
        autoplay
        loop
      />

      <View style={{ margin: 10 }}>
        <MyText weight="600" fontSize={22}>
          {data.name}
        </MyText>
        <MyText>
          {data.categories.map((item, index) => {
            return (
              <MyText key={item.alias} color="#636363">
                {item.title}
                {data.categories.length - 1 === index ? "" : ","}{" "}
              </MyText>
            );
          })}
        </MyText>
        <MyText color="#8E8E8E">
          {data.location.address1}, {data.location.city} {data.location.state}{" "}
          {data.location.zip_code}.
        </MyText>

        <View style={[styles.flex_row_card, styles.card]}>
          <View style={styles.flex_row}>
            <AntDesign
              name="star"
              size={24}
              color="orange"
              style={{ marginRight: 5 }}
            />
            <MyText>{data.rating}</MyText>
          </View>
          <View style={styles.flex_row}>
            <MaterialIcons
              name="assignment"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
            <MyText>{data.review_count}</MyText>
          </View>
          <View style={styles.flex_row}>
            {data.is_closed ? (
              <View style={styles.flex_row}>
                <AntDesign
                  name="closecircle"
                  size={24}
                  color="red"
                  style={{ marginRight: 5 }}
                />
                <MyText>Closed</MyText>
              </View>
            ) : (
              <View style={styles.flex_row}>
                <AntDesign
                  name="checkcircle"
                  size={24}
                  color="green"
                  style={{ marginRight: 5 }}
                />
                <MyText weight="600" fontSize={16}>
                  Open
                </MyText>
              </View>
            )}
          </View>
        </View>

        <View style={{}}>
          <MyText weight="500" fontSize={18}>
            Restaurant Information
          </MyText>

          <View>
            <View style={[styles.flex_row, styles.mt_10]}>
              <FontAwesome
                name="phone"
                size={24}
                color="black"
                style={{ marginRight: 5 }}
              />
              <MyText weight="400">{data.phone}</MyText>
            </View>

            <View style={[styles.flex_row, styles.mt_10, styles.mb_10]}>
              <MaterialIcons
                name="attach-money"
                size={24}
                color="black"
                style={{ marginRight: 5 }}
              />
              <MyText weight="400">
                {data.price === "$$$"
                  ? "Big Spender"
                  : data.price === "$$"
                  ? "Bit Pricier"
                  : "Cost Effective"}
              </MyText>
            </View>

            {data.hours ? (
              <MyText weight="500" fontSize={16}>
                Hours
              </MyText>
            ) : (
              <></>
            )}

            {data.hours ? (
              data.hours[0].open.map((item) => {
                return (
                  <View style={[styles.flex_row, styles.hours]}>
                    <MyText weight="400">{getDay(item.day)}</MyText>

                    <MyText weight="400">
                      {formatTime(item.start)} - {formatTime(item.end)}
                    </MyText>
                  </View>
                );
              })
            ) : (
              <></>
            )}

            <View style={styles.mt_10}>
              {data.special_hours ? (
                <MyText weight="500" fontSize={16}>
                  Special Hours
                </MyText>
              ) : (
                <></>
              )}

              {data.special_hours ? (
                data.special_hours.map((item) => {
                  return (
                    <View style={[styles.flex_row, styles.hours]}>
                      <MyText weight="400">{item.date}</MyText>

                      <View>
                        {item.is_closed ? (
                          <MyText weight="600" color="#c40000">
                            Close
                          </MyText>
                        ) : (
                          <MyText weight="600" color="#11a800">
                            Open
                          </MyText>
                        )}
                      </View>
                    </View>
                  );
                })
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  ) : (
    <View style={styles.loading_container}>
      <ActivityIndicator size={50} color="#000000" />
    </View>
  );
};

export default RestaurantDetailScreen;
