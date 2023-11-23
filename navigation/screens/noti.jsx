import { View, StyleSheet, Image, Text } from "react-native";
import { Boundary } from "../../common/ui/boundary";
import NotiData from "../../data/notiData";
export default Notifications = () => {
  return (
    <Boundary title={"Notification"}>
      <View style={styles.list}>
        {NotiData.map((item) => (
          <Button
            key={item.id}
            img={item.image}
            content={item.content}
            title={item.title}
          />
        ))}
      </View>
    </Boundary>
  );
};

const Button = ({ img, title, content }) => {
  return (
    <View style={styles.container}>
      <Image source={img} />
      <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight: "700",
  },
  content: {
    fontSize: 16,
    color: "#cccaca",
  },
  list: {
    marginTop: 10,
    flexDirection: "column",
    gap: 20,
  },
});
