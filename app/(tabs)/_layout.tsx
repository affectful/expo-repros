// import { Tabs } from 'expo-router';
import { TabList, TabSlot, TabTriggerProps, Tabs, useTabTrigger } from 'expo-router/ui'

import React from 'react';
import { Platform, Pressable, Text } from 'react-native';

export function TabTrigger({ asChild, name, href, reset = 'onFocus', ...props }: TabTriggerProps) {
  const { trigger, triggerProps } = useTabTrigger({
    name,
    reset,
    ...props,
  });

  // These props are not typed, but are allowed by React Native Web
  const reactNativeWebProps = { href: trigger?.resolvedHref };

  return (
    <Pressable {...reactNativeWebProps} {...props} {...triggerProps}>
      {props.children}
    </Pressable>
  );
}

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList>
        <TabTrigger name="home" href="/">
          <Text>Home</Text>
        </TabTrigger>
        <TabTrigger name="explore" href="/explore">
          <Text>Explore</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}