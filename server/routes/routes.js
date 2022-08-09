const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
  createSingleItem,
  bookmarkChangeStatus,
  getFilteredItems,
  postAskItem,
  getAccountItems,
  getAccountItemsAsked,
  postBookmark,
  deleteBookmark
} = require("../controller/controllers");

router.route('/').get(getAllItems).post(createSingleItem);
router.route('/filter').get(getFilteredItems)
router.route('/ask').post(postAskItem)
router.route('/modal').get(getSingleItem)
router.route('/account-items').get(getAccountItems)
router.route('/account-asked').get(getAccountItemsAsked)
router.route('/bookmarked').post(postBookmark)
router.route('/bookmark-change-status').put(bookmarkChangeStatus)
router.route('/delete-bookmark').delete(deleteBookmark)

module.exports = router;
