"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateuser = exports.updateuser = exports.getuserbyid = exports.getuser = exports.createuser = void 0;
const user_1 = __importDefault(require("../../models/user"));
const createuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(req.body);
        yield user.save();
        res.status(201).json({
            message: "usuario creado exitosamente",
            data: user, error: false
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});
exports.createuser = createuser;
const getuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find({ isActive: true });
        res.status(201).json({
            message: "usuarios encontrados",
            data: users, error: false
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});
exports.getuser = getuser;
const getuserbyid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findById(id);
        if (!user) {
            res.status(404).json({
                message: "usuario no encontrado",
                error: true
            });
        }
        res.status(201).json({
            message: "usuario encontrado",
            data: user, error: false
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});
exports.getuserbyid = getuserbyid;
const updateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findByIdAndUpdate(id, {
            $set: req.body
        }, {
            new: true
        });
        if (!user) {
            res.status(404).json({
                message: "usuario no encontrado",
                error: true
            });
        }
        res.status(201).json({
            message: "usuario encontrado",
            data: user, error: false
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});
exports.updateuser = updateuser;
const deactivateuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findByIdAndUpdate(id, {
            isActive: false
        }, {
            new: true
        });
        if (!user) {
            res.status(404).json({
                message: "usuario no encontrado",
                error: true
            });
        }
        res.status(201).json({
            message: "usuario encontrado",
            data: user, error: false
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});
exports.deactivateuser = deactivateuser;
