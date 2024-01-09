import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSession } from '../../ctx'

export default function index() {
  const { signOut } = useSession()

  return (
    <View>
      <Text>Protected Index Page</Text>
      <Pressable onPress={signOut}>
        <Text>
          Sign Out
        </Text>
      </Pressable>
    </View>
  )
}