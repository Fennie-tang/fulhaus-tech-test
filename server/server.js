const express = require("express");
// const helmet = require("helmet");
const morgan = require("morgan");

const {
  getAcronym,
  createAcronym,
  updateAcronym,
  deleteAcronym,
} = require("./handlers");
express()
  .use(express.json())
  .use(morgan("tiny"))

  .get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Hello World" });
  })

  //endpoints for acronyms
  //gets all acronyms in the data file
  .get("/acronyms", getAcronym)
  //creates acronym
  .post("/acronym", createAcronym)
  //updates an acronym using the id
  .patch("/acronym/:acronymId", updateAcronym)
  //deletes acronym using the id
  .delete("/acronym/:acronymId", deleteAcronym)

  //error
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(8000, ()=>{
    console.log("server running on port 8000");
  });
