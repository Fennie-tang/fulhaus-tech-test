# Fulhaus Test FE and BE
File composed of both Front-end and back-end coding

## Back-end Installation
Create .env file in the Server folder. 
In the file write the following code and fill in the necessary requirements for username, password:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```
In mongoDB create a database called Acronym. The collection would be called acronyms.

Do the following in the terminal:
```bash
cd server
```
```bash
yarn install
```
```bash
node batchimport.js
```
```bash
yarn start
```

## Back-end Usage

```python
endpoints

  //gets all acronyms in the data file
  .get("/acronyms", getAcronym)

  //creates an acronym
  .post("/acronym", createAcronym)

  //updates an acronym using the id
  .patch("/acronym/:acronymId", updateAcronym)

  //deletes acronym using the id
  .delete("/acronym/:acronymId", deleteAcronym)
```

## Testing
The Back-end runs on port 8000. This can be tested with insomnia.

http://localhost:8000/(endpoint)

## Front-end Installation
Do the following in a separate terminal:
```bash
cd client
```
```bash
yarn install
```
```bash
yarn start
```
The front-end will run on port 3000.