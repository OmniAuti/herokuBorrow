const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
  createSingleItem,
  bookmarkSingleItem,
  deleteSingleItem,
  getFilteredItems,
  postAskItem,
  getAccountItems,
  getAccountItemsAsked,
  postBookmark,
} = require("../controller/controllers");

router.route('/').get(getAllItems).post(createSingleItem);
router.route('/filter').get(getFilteredItems)
router.route('/ask').post(postAskItem)
router.route('/modal').get(getSingleItem)
router.route('/account-items').get(getAccountItems)
router.route('/account-asked').get(getAccountItemsAsked)
router.route('/bookmarked').post(postBookmark)
router.route('/bookmark').put(bookmarkSingleItem)

module.exports = router;
