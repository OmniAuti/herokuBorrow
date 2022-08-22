const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getSingleItem,
  createSingleItem,
  getFilteredItems,
  postAskItem,
  getAccountItems,
  getAccountItemsAsked,
  addBookmark,
  getAccountBookmarked,
  getSingleItemAsk,
  editAccountOffered,
  editAccountAsked,
  deleteAllAccountData
} = require("../controller/controllers");

router.route('/').get(getAllItems).post(createSingleItem);
router.route('/filter').get(getFilteredItems)
router.route('/ask').post(postAskItem)
router.route('/modal').get(getSingleItem)
router.route('/single-ask-item').get(getSingleItemAsk)
router.route('/account-items').get(getAccountItems)
router.route('/account-asked').get(getAccountItemsAsked)
router.route('/bookmarked').put(addBookmark)
router.route('/bookmarked-account').get(getAccountBookmarked)
router.route('/account-offered-edit').put(editAccountOffered)
router.route('/account-asked-edit').put(editAccountAsked)
router.route('/delete-all-account-data').delete(deleteAllAccountData)

module.exports = router;
