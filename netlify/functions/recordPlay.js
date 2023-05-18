const Airtable = require("airtable");

exports.handler = async function () {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

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
