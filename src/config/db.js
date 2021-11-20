import mongoose from "mongoose";

export default function connectDb() {
  mongoose.connect(process.env.CONNECTION_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () =>
    console.log("Conexão com o banco de dados estabelecida com sucesso!")
  );
}
