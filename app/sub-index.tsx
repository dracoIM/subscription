import { View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
// @ts-ignore
import img from "@/assets/images/amico.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  const [open, setOpen] = useState(false);
  const snapPoints = useMemo(() => ["40%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      style={[props.style, { flex: 1 }]}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Pressable
            style={{
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
            }}
          >
            <AntDesign name="closecircleo" size={32} color="#090909" />
          </Pressable>
        </View>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 48 }}
        >
          <Image
            source={img}
            style={{ height: 256, marginHorizontal: 20, objectFit: "contain" }}
            contentFit="contain"
          />
          <View style={{ flex: 1, marginTop: 36 }}>
            <Text
              style={{
                fontSize: 36,
                fontWeight: 700,
                maxWidth: 200,
                marginBottom: 4,
                lineHeight: 40,
              }}
            >
              Fresh Injera Every week!
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "green",
                marginBottom: 8,
              }}
            >
              At an incredible price!
            </Text>
            <Text
              style={{
                flex: 1,
                lineHeight: 20,
                fontSize: 14,
                fontWeight: 400,
                color: "#797979",
                marginBottom: 12,
              }}
            >
              Enjoy authentic Ethiopian injera without the hassle. Subscribe
              monthly and get fresh, soft injera delivered to your doorstep
              every week.
            </Text>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                🌾 Always fresh{" "}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                🚚 Delivered regularly{" "}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                🍴 Hassle-free
              </Text>
            </View>
          </View>
        </ScrollView>
        <Pressable
          style={{ backgroundColor: "orange" }}
          onPress={() => setOpen(true)}
        >
          <Text>Btn</Text>
        </Pressable>
      </SafeAreaView>
      {open && (
        <BottomSheet
          enableDynamicSizing={false}
          enablePanDownToClose
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
          index={0}
          onClose={() => setOpen(false)}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetView style={{ padding: 16 }}>
            <View style={{}}>
              <Text style={{ fontSize: 20, fontWeight: 500, marginBottom: 12 }}>
                How much injera do you need?
              </Text>
              <Text
                style={{
                  lineHeight: 20,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#797979",
                  marginBottom: 20,
                }}
              >
                Choose how much injera you need every week, and we'll handle the
                rest.
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  gap: 24,
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#d9d9d9",
                    flex: 1,
                  }}
                ></View>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: 600 }}>
                    Your Monthly Price:
                  </Text>
                  <Text
                    style={{ fontSize: 20, fontWeight: 700, color: "green" }}
                  >
                    40.00$
                  </Text>
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
}
