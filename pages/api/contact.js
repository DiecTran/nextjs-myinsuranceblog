import { MongoClient } from "mongodb";

export default async function Handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message, phone } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    //Store it in database
    const newMessage = {
      email,
      name,
      message,
      phone,
    };

    // console.log(newMessage);

    let client;

    // eslint-disable-next-line no-undef
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.xvw7rln.mongodb.net/${process.env.mongodb_databasename}?retryWrites=true&w=majority&appName=Cluster0`;
    // "mongodb+srv://tdiecan83:MNhxE33L1h5wsZDD@cluster0.xvw7rln.mongodb.net/myblogsite?retryWrites=true&w=majority&appName=Cluster0"
    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.statuc(500).json({ message: "Cound not connect to database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Could Not Insert To dataBase" });
      return;
    }

    client.close();
    res
      .status(201)
      // eslint-disable-next-line no-dupe-keys
      .json({ message: "Successfully stored message", message: newMessage });
  }
}
