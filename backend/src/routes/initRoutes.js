import express from "express";
import auth from "./authRoutes.js";
const router = express.Router();

router.use(express.json());
router.use("/auth", auth);

router.get("/", (request, response) => {
  try {
    return response.status(200).json([
      {
        rel: "self",
        method: "GET",
        href: "http://127.0.0.1",
      },
      {
        rel: "create",
        method: "POST",
        title: "Create Person",
        href: "http://127.0.0.1/person",
      },
    ]);
  } catch (error) {
    console.error(error);
  }
});

export default router;
