import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>User Profile</Text>
          <Ionicons name="person-circle-outline" size={32} color="#3B3B98" />
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AH</Text>
          </View>
          <Text style={styles.name}>Abu Huraira</Text>
          <Text style={styles.role}>Mobile App</Text>
          <Text style={styles.location}>Lahore, Punjab</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>248</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>56</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>32</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.bio}>
            Passionate product designer building polished mobile experiences. I love clean
            layouts, fast interactions, and collaborating with remote teams.
          </Text>

          <View style={styles.actionRow}>
            <Pressable style={[styles.button, styles.followButton]} onPress={()=>alert("Thanks")}>
              <Text style={[styles.buttonText, styles.followText]}>Follow</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.messageButton]} onPress={()=>alert("Feature Not Implemented")}>
              <Text style={[styles.buttonText, styles.messageText]}>Message</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={18} color="#3B3B98" />
            <Text style={styles.infoText}>huraira@gmail.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={18} color="#3B3B98" />
            <Text style={styles.infoText}>03421628095</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={18} color="#3B3B98" />
            <Text style={styles.infoText}>Lahore, Punjab</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FF",
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E1F28",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
    marginBottom: 20,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#E9E9FF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#3B3B98",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#1E1F28",
  },
  role: {
    fontSize: 15,
    color: "#5F5F75",
    textAlign: "center",
    marginTop: 6,
  },
  location: {
    fontSize: 14,
    color: "#8F90A6",
    textAlign: "center",
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E1F28",
  },
  statLabel: {
    fontSize: 12,
    color: "#8F90A6",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E1F28",
    marginTop: 24,
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: "#5F5F75",
    lineHeight: 20,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  followButton: {
    backgroundColor: "#3B3B98",
    marginRight: 10,
  },
  messageButton: {
    backgroundColor: "#F4F7FF",
    borderWidth: 1,
    borderColor: "#DBDBFF",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "700",
  },
  followText: {
    color: "#FFFFFF",
  },
  messageText: {
    color: "#3B3B98",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#5F5F75",
  },
});
