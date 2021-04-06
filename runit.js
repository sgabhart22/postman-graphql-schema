const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");
const {
    getIntrospectionQuery,
    printSchema,
    buildClientSchema
} = require("graphql");

const endpoint = "https://your-url/graphql.json";

async function main() {
  const introspectionQuery = getIntrospectionQuery();

    const response = await fetch(
        endpoint,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: introspectionQuery })
        }
    );

    const { data } = await response.json();
    const schema = buildClientSchema(data);

    const outputFile = path.join(__dirname, "./result.gql");
    await fs.promises.writeFile(outputFile, printSchema(schema));
}

main();