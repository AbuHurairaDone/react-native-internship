import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native";

import * as Contacts from "expo-contacts";

export default function Index() {
  const [contacts, setContacts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchContacts = async () => {
    const { status } =
      await Contacts.requestPermissionsAsync();

    if (status === "granted") {

      const { data } =
        await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Name,
            Contacts.Fields.PhoneNumbers,
          ],
        });

      setContacts(data);

    } else {
      console.log("Access Denied");
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await fetchContacts();

    setRefreshing(false);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.number}>
          {item.phoneNumbers?.[0]?.number ||
            "No Number"}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <Button
        title="Get Contacts"
        onPress={fetchContacts}
      />

      <Text style={styles.count}>
        Total Contacts: {contacts.length}
      </Text>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}

        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#2563EB"]}
          />
        }

        contentContainerStyle={{
          padding: 15,
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  count: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 15,
    color: "#2563EB",
  },

  card: {
    backgroundColor: "#DBEAFE",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E3A8A",
  },

  number: {
    marginTop: 5,
    fontSize: 15,
    color: "#475569",
  },
});