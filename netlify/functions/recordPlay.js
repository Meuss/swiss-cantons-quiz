const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
});

exports.handler = async function () {
  const base = new Airtable();

  try {
    await base("Plays").create([
      {
        fields: {
          Timestamp: new Date().toISOString(),
        },
      },
    ]);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Play recorded" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to record play" }),
    };
  }
};
