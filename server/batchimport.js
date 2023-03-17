const dbConn = require("./db");
const AcronymDataArray = require("./data/acronyms");

const batchImport = async () => {
  try {
    const db = await dbConn();
    await db.collection("acronyms").insertMany(AcronymDataArray);
    console.log("data uploaded");
  } catch (err) {
    console.log(err);
  }
};

batchImport();
