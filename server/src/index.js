const app = require("./app");
const { PORT } = require("./configs");

require("./configs/connectMongo");

app.get("/health", (_req, res) => {
  res.status(200).send(`Health Good`);
})

app.listen(PORT, ()=>{
  console.log(`Listening on PORT ${PORT}`);
})