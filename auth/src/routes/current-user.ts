import { currentUser, requireAuth } from "@abraham-org-tickets/common";
import express, { Request, Response } from "express";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  requireAuth,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
