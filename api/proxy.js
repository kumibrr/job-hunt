import fetch from "node-fetch";
const handler = async (req, res) => {
  const url = `https://api.infojobs.net/api${req.body.url}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: Buffer.from(
          `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
        ).toString("base64"),
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,POST,PUT",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    });

    if (!response.ok) {
      res.status(response.status).json(response.statusText);
    }
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
