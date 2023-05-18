const Airtable = require("airtable");

exports.handler = async function () {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  try {
    const records = await base("Plays")
      .select({
        sort: [{ field: "ID", direction: "desc" }],
        maxRecords: 1,
      })
      .all();
    const latestRecord = records[0];
    const id = latestRecord.get("ID");
    return {
      statusCode: 200,
      body: JSON.stringify(id),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch play count" }),
    };
  }
};
