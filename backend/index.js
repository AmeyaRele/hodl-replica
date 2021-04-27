let cors = require("cors");
let express = require("express");
let axios = require("axios");
let app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
app.get("/api/wazirx", cors(), async (req, res) => {
    const url = "https://api.wazirx.com/api/v2/tickers";
    axios
        .get(url)
        .then(function (data) {
            let temp = Object.entries(data.data);
            temp = temp.slice(0, 10);
            console.log(temp[0][1]);
            res.send(temp);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
