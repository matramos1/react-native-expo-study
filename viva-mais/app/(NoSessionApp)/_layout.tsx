import { Stack } from "expo-router";

export default function NoSessionAppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
