import app from "./app.js";
import cloudinary from "cloudinary"

cloudinary.v2.config({ 
  cloud_name: 'ddaovz8uo', 
  api_key: '896972913128192', 
  api_secret: '28NJyMcFiIMGBbVdke4GLlIc8Hs' 
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })