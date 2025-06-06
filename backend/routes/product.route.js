import express from 'express';

import { getAllProduct } from '../controllers/product.controller.js';
import { addProduct } from '../controllers/product.controller.js';
import { updateProduct } from '../controllers/product.controller.js';
import { deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;