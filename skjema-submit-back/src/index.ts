import { PORT } from "./config";
import app from "./app";

const init = async () => {
  app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
};

init();
