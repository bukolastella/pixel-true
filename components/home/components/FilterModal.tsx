import {
  View,
  Text,
  StyleSheet,
  Modal,
  useColorScheme,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { FC, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import FilterPill from "./FilterPill";
import { FoodCategory, MenuList, RestaurantList, TypeCategory } from "./data";
import GreenCustomBtn from "@/components/ui/GreenCustomBtn";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import RestaurantCard from "./RestaurantCard";
import MenuCard from "./MenuCard";

interface Props {
  onClose: () => void;
  open: boolean;
}

const FilterModal: FC<Props> = ({ onClose, open }) => {
  const theme = useColorScheme() ?? "light";
  const [type, setType] = useState<TypeCategory>();
  const [locationGreater, setLocationGreater] = useState<boolean>();
  const [food, setFood] = useState<FoodCategory>();
  const [search, setSearch] = useState(false);

  const onSearch = () => {
    setSearch(true);
  };

  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}
    >
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? insets.top : 22,
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        <View style={[styles.centeredView]}>
          <View style={[styles.modalView]}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            {search &&
              type === TypeCategory.Restaurant &&
              RestaurantList.filter((ev) =>
                locationGreater ? ev.location >= 10 : ev.location < 10
              ).map((ev, index) => <RestaurantCard {...ev} key={index} />)}

            {search &&
              type === TypeCategory.Menu &&
              MenuList.filter((ev) => ev.foodCategory === food).map(
                (ev, index) => <MenuCard {...ev} key={index} />
              )}

            {!search && (
              <>
                <View style={styles.sectionWrapper}>
                  <ThemedText type="bold" style={styles.title}>
                    Type
                  </ThemedText>

                  <View style={styles.fillWrapper}>
                    <FilterPill
                      name="Restaurant"
                      isActive={type === TypeCategory.Restaurant}
                      onPress={() => {
                        setFood(undefined);
                        setLocationGreater(undefined);
                        setType(TypeCategory.Restaurant);
                      }}
                    />
                    <FilterPill
                      isActive={type === TypeCategory.Menu}
                      name="Menu"
                      onPress={() => {
                        setFood(undefined);
                        setLocationGreater(undefined);
                        setType(TypeCategory.Menu);
                      }}
                    />
                  </View>
                </View>
                {/*  */}
                {type === TypeCategory.Restaurant && (
                  <View style={styles.sectionWrapper}>
                    <ThemedText type="bold">Location</ThemedText>

                    <View style={styles.fillWrapper}>
                      <FilterPill
                        name="<10 Km"
                        isActive={locationGreater === false}
                        onPress={() => setLocationGreater(false)}
                      />

                      <FilterPill
                        name=">=10 Km"
                        isActive={locationGreater === true}
                        onPress={() => setLocationGreater(true)}
                      />
                    </View>
                  </View>
                )}
                {/*  */}
                {type === TypeCategory.Menu && (
                  <View style={styles.sectionWrapper}>
                    <ThemedText type="bold" style={styles.title}>
                      Food
                    </ThemedText>

                    <View style={styles.fillWrapper}>
                      {Object.values(FoodCategory).map((ev, index) => (
                        <FilterPill
                          key={index}
                          name={ev}
                          isActive={food === ev}
                          onPress={() => setFood(ev)}
                        />
                      ))}
                    </View>
                  </View>
                )}

                {/*  */}
                <GreenCustomBtn
                  text="Search"
                  onPress={onSearch}
                  style={{ width: "100%" }}
                  isDisabled={
                    locationGreater === undefined && food === undefined
                  }
                />
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    color: "red",
    width: "100%",
    textAlign: "right",
    // flex: 1,
  },
  modalView: {
    // margin: 100,
    width: 300,
    // backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    gap: 20,
    // alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  sectionWrapper: {
    gap: 20,
  },
  title: {
    fontSize: 15,
  },
  fillWrapper: {
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
  },
});
