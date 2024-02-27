const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const corsOptions = require("./config/corsOptions");
const sendEmail = require("./config/mailjet.config");

dotenv.config();
app = express();

const port = process.env.PORT || 4800;

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/earlyaccess", async (req, res) => {
  const welcomeEmailOptions = (name, email) => {
    const from = process.env.MAILJET_FROM_ADDRESS;
    const to = email;
    const subject = `Hi ${name}, We have received your early access request! 🚀`;
    return [
      {
        From: { Email: from, Name: "Surveyr App" },
        To: [{ Email: to, Name: `${name}` }],
        Subject: subject,
        TemplateID: 5734958,
        TemplateLanguage: true,
        Variables: { user_name: name },
      },
    ];
  };

  const { name, email } = req.body;
  const welcomeEmail = welcomeEmailOptions(name, email);
  sendEmail(welcomeEmail)
    .then(() => {
      console.log(":: early access email sent ::");
      res.status(200).json({ message: "early access email sent" });
    })
    .catch((error) => {
      console.log(":: early access email error ::", error);
      res.status(500).json({ message: "early access email error" });
    });
});

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "development"
) {
  console.log("running on heroku servers");
  app.use(express.static(path.join(__dirname, "dashboard/build")));

  app.get("*", (req, res) => {
    console.log("prod static space params --> %o", req.params);
    console.log("prod static space body -->  %o", req.body);
    res.sendFile(path.join(__dirname, "dashboard", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`:: Surveyr server running on port ${port} :: 🚀 `);
});
