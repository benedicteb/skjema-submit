import express from "express";

const checkHealth = (req: express.Request, res: express.Response) => {
  res.send("ok");
};

export { checkHealth };
