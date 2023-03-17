"use strict";
const dbConn = require("./db");
const { v4: uuidv4 } = require("uuid");

/// Get all Acronyms
const getAcronym = async (req, res) => {
  try {
    const db = await dbConn();
    const allAcronyms = await db.collection("acronyms").find().toArray();

    res.status(200).json({ status: 200, data: allAcronyms });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: 400, message: "Error!" });
  } 
};

// returns specific Acronym
const createAcronym = async (req, res) => {
  try {
    const db = await dbConn();

    const { definition, acronym } = req.body;

    if (!definition || !acronym) {
      return res
        .status(400)
        .json({ status: 400, message: "definition or acronym is missing" });
    }

    const newAcronym = { _id: uuidv4(), definition, acronym };

    const selectedAcronym = await db
      .collection("acronyms")
      .insertOne(newAcronym);

    return res.status(200).json({ status: 200, data: selectedAcronym });
  } catch (err) {
    return res
      .status(400)
      .json({ status: 400, message: "Error! creating acronym" });
  } 
};

//Updates acronym
const updateAcronym = async (req, res) => {
  try {
    const db = await dbConn();

    const _id = req.params.acronymId;
    const { definition, acronym } = req.body;

    if (!acronym && !definition) {
      return res
        .status(400)
        .json({ status: 400, message: "There is nothing to update!" });
    }

    const existingAcronym = await db
      .collection("acronyms")
      .findOne({ _id: _id });

    if (!existingAcronym) {
      return res
        .status(404)
        .json({ status: 404, message: "Acronym not found!" });
    }

    const updatedAcronym = {
      definition: definition ? definition : existingAcronym.definition,
      acronym: acronym ? acronym : existingAcronym.acronym,
    };

    await db
      .collection("acronyms")
      .updateOne({ _id: _id }, { $set: updatedAcronym });

    return res.status(200).json({ status: 200, _id, data: req.body });
  } catch (err) {
    res.status(400).json({ status: 400, message: "Error! updating acronym" });
  } 
};

//Delete acronym
const deleteAcronym = async (req, res) => {
  const db = await dbConn();
  try {
    const _id = req.params.acronymId;
    await db.collection("acronyms").deleteOne({ _id: _id });

    return res.status(200).json({ status: 200, _id });
  } catch (err) {
    return res
      .status(404)
      .json({ status: 404, message: "acronym was not deleted" });
  } 
};

module.exports = {
  getAcronym,
  createAcronym,
  updateAcronym,
  deleteAcronym,
};
