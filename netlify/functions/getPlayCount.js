const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN,
});

exports.handler = async function () {
  const base = new Airtable().base(process.env.AIRTABLE_BASE_ID);

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
