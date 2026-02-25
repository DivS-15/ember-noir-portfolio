export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          userContestRanking(username: "DivSar_15") {
            attendedContestsCount
            rating
            globalRanking
            topPercentage
            badge { name }
          }
          userContestRankingHistory(username: "DivSar_15") {
            attended
            rating
            ranking
            contest {
              title
              startTime
            }
          }
        }`
      })
    });

    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error('LeetCode API error:', error);
    res.status(500).json({ error: "leetcode_api_error", message: error.message });
  }
}
