const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
  createSingleItem,
  editSingleItem,
  deleteSingleItem,
  getFilteredItems,
  postAskItem,
  getAccountItems,
  getAccountItemsAsked,
} = require("../controller/controllers");

router.route('/').get(getAllItems).post(createSingleItem);
router.route('/filter').get(getFilteredItems)
router.route('/ask').post(postAskItem)
router.route('/modal').get(getSingleItem)
router.route('/account-items').get(getAccountItems)
router.route('/account-asked').get(getAccountItemsAsked)

module.exports = router;
