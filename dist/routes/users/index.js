"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../../controllers/users/index");
const router = express_1.default.Router();
router.get("/", index_1.getuser);
router.get("/:id", index_1.getuserbyid);
router.post("/", index_1.createuser);
router.patch("/:id", index_1.updateuser);
router.patch("/deactivate/:id", index_1.deactivateuser);
exports.default = router;
