## Obtaining a GraphQL Schema for Postman

For a Postman-friendly, importable schema, do like this:
- Clone this repo
- `npm install`
- Replace `endpoint` in runit.js with the GraphQL endpoint of your target API
- Add any authorization headers necessary in the options of the `fetch` call
- `node runit.js` and import/copy the contents into the schema of a new API created in Postman

Bam!