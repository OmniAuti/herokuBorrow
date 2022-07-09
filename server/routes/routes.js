const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
  createSingleItem,
  editSingleItem,
  deleteSingleItem,
  getFilteredItems,
  postAskItem
} = require("../controller/controllers");

router.route('/').get(getAllItems).post(createSingleItem);
router.route('/filter').get(getFilteredItems)
router.route('/ask').post(postAskItem)
router.route('/modal').get(getSingleItem)

module.exports = router;
