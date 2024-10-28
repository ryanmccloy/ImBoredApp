export default async function handler(req, res) {
  const { type } = req.query;

  const API_URL =
    type === "random"
      ? `https://bored-api.appbrewery.com/${type}`
      : `https://bored-api.appbrewery.com/filter?type=${type}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      console.error("serverless fetching error");
      throw new Error("Failed to fetch activity from API");
    }

    const data = await response.json();
    res.status(200).json(data); // Send data back to frontend
  } catch (err) {
    console.error("serverless function:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch activity (serverless function)" });
  }
}
