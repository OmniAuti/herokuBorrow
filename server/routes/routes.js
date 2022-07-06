const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
  createSingleItem,
  editSingleItem,
  deleteSingleItem,
  getFilteredItems,
} = require("../controller/controllers");

router.route('/').get(getAllItems).post(createSingleItem);
router.route('/filter').get(getFilteredItems)

module.exports = router;
