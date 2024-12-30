import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useMemo, useRef, useState } from "react";
import img from "@/assets/images/Waving Hand Medium Light Skin Tone.svg";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";

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
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={{ padding: 4 }}>Subscription</Text>
        </View>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: "#D9D9D9",
              flex: 1,
              marginTop: 36,
              paddingTop: 16,
              paddingBottom: 24,
              paddingHorizontal: 16,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "green",
                marginBottom: 16,
                backgroundColor: "rgba(9,255,74,0.22)",
                padding: 2,
                paddingHorizontal: 12,
                alignSelf: "flex-start",
                textAlign: "center",
                borderRadius: 8,
              }}
            >
              Current Plan
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontWeight: 700,
                maxWidth: 200,
                marginBottom: 8,
                lineHeight: 40,
              }}
            >
              $ 40/month
            </Text>

            <Text
              style={{
                flex: 1,
                lineHeight: 20,
                fontSize: 14,
                fontWeight: 400,
                color: "#797979",
                marginBottom: 16,
              }}
            >
              Ethiopian Injera delivered to your doorsteps every week, paid
              monthly.
            </Text>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                🌾 Always fresh{" "}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 500 }}>
                🚚 Delivered regularly{" "}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 500, marginBottom: 16 }}>
                🍴 Hassle-free
              </Text>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#FF6B00",
                  }}
                >
                  Current Plan
                </Text>
                <Entypo name="chevron-right" size={24} color="#FF6B00" />
              </Pressable>
            </View>
          </View>
        </ScrollView>
        <Pressable
          onPress={() => setOpen(true)}
          style={{ backgroundColor: "orange" }}
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
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  height: 60,
                  width: 60,
                  padding: 4,
                  borderRadius: 50,
                  backgroundColor: "#eeeeee",
                  marginTop: 16,
                }}
              >
                <Image
                  source={img}
                  style={{
                    height: 40,
                    objectFit: "contain",
                  }}
                  contentFit="contain"
                />
              </View>

              <Text
                style={{
                  lineHeight: 20,
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#000000",
                  marginTop: 24,
                  marginBottom: 12,
                  paddingVertical: 4,
                }}
              >
                Subscription Cancelled
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  marginBottom: 16,
                  color: "#797979",
                  textAlign: "center",
                }}
              >
                You have successfully cancelled your Injera subscription
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
}
