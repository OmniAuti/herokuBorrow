const Items = require("../models/ItemModel");
const AskItems = require("../models/AskModel");

const getAllItems = async (req, res) => {
  try {
    const items = await Items.find({});
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const createSingleItem = async (req, res) => {
  try {
    const item = new Items({
      type: req.body.type,
      quantity: req.body.quantity,
      description: req.body.description,
      condition: req.body.condition,
      location: req.body.location,
      zipcode: req.body.zipcode,
      postType: req.body.postType,
      _uid: req.body._uid,
      photoInfo: req.body.photoInfo,
    });

    item.save((err, post) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(201).json(post);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const getFilteredItems = async (req, res) => {
  try {
    var queryObj = {};

    if (req.query.type.length > 0) {
      queryObj.type = req.query.type;
    }
    if (req.query.quantity > 0) {
      queryObj.quantity = { $gte: Number(req.query.quantity) };
    }
    if (req.query.condition.length > 0) {
      queryObj.condition = req.query.condition;
    }
    if (req.query.location.length > 0) {
      queryObj.location = req.query.location;
    }
    if (req.query.zipcode.length > 0) {
      queryObj.zipcode = req.query.zipcode;
    }
    const filteredItems = await Items.find(queryObj);
    res.status(200).json(filteredItems);
  } catch (e) {
    console.log(e);
  }
};
const postAskItem = async (req, res) => {
  try {
    const askItem = new AskItems({
      who: req.body.who,
      type: req.body.type,
      quantity: req.body.quantity,
      specify: req.body.specify,
      condition: req.body.condition,
      location: req.body.location,
      zipcode: req.body.zipcode,
      postType: req.body.postType,
      _uid: req.body._uid,
    });

    askItem.save((err, post) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(201).json(post);
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Error" });
  }
};
const getSingleItem = async (req, res) => {
  try {
    const id = req.query[0];
    const modalItem = await Items.findById(id);
    res.status(200).json(modalItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const getSingleItemAsk = async (req, res) => {
  try {
    const id = req.query[0];
    const modalItem = await AskItems.findById(id);
    res.status(200).json(modalItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const getAccountItems = async (req, res) => {
  const accountItems = await Items.find(req.query);
  res.status(200).json(accountItems);
};
const getAccountItemsAsked = async (req, res) => {
  const accountItems = await AskItems.find(req.query);
  res.status(200).json(accountItems);
};
const addBookmark = async (req, res) => {
  var bookmarkCheck = await Items.findOne({ _id: req.body.postId });
  if (bookmarkCheck.bookmarked.indexOf(req.body._uid) >= 0) {
    const idx = bookmarkCheck.bookmarked.indexOf(req.body._uid);
    bookmarkCheck.bookmarked.splice(idx, 1);
    await Items.findOneAndUpdate({ _id: req.body.postId }, bookmarkCheck);
    res.json({ msg: "Bookmark Removed" });
  } else {
    await Items.findOneAndUpdate(
      { _id: req.body.postId },
      { $push: { bookmarked: req.body._uid } }
    );
    res.json({ msg: "Bookmark Success" });
  }
};
const addAskItemBookmark = async (req, res) => {
  var bookmarkCheck = await AskItems.findOne({ _id: req.body.postId });
  if (bookmarkCheck.bookmarked.indexOf(req.body._uid) >= 0) {
    const idx = bookmarkCheck.bookmarked.indexOf(req.body._uid);
    bookmarkCheck.bookmarked.splice(idx, 1);
    await AskItems.findOneAndUpdate({ _id: req.body.postId }, bookmarkCheck);
    res.json({ msg: "Bookmark Removed" });
  } else {
    await AskItems.findOneAndUpdate(
      { _id: req.body.postId },
      { $push: { bookmarked: req.body._uid } }
    );
    res.json({ msg: "Bookmark Success" });
  }
};
const getAccountBookmarked = async (req, res) => {
  const bookmarkedItems = await Items.find({ bookmarked: req.query._uid });
  const bookmarkedAskItems = await AskItems.find({
    bookmarked: req.query._uid,
  });
  const combinedBookmarkArr = bookmarkedItems.concat(bookmarkedAskItems);
  res.status(200).json(combinedBookmarkArr);
};
const editAccountOffered = async (req, res) => {
  const item = req.body;
  var id = item._id;
  delete item._id;
  const editItem = await Items.findOneAndUpdate({ _id: id }, item);
  res.json(editItem);
};
const editAccountAsked = async (req, res) => {
  const item = req.body;
  var id = item._id;
  delete item._id;
  const editItem = await AskItems.findOneAndUpdate({ _id: id }, item);
  res.json({ msg: "success", editItem });
};
const deleteAllAccountData = async (req, res) => {
  const uid = req.body.uid;
  await Items.deleteMany({ _uid: uid });
  await AskItems.deleteMany({ _uid: uid });
  res.json({ msg: "All Deleted" });
};
const deleteSingleItem = async (req, res) => {
  const id = req.body._id[0];
  try {
    if (req.body._id[1] === "ask") {
      await AskItems.deleteOne({ _id: id });
      res.json({ msg: "Item Deleted" });
    } else if (req.body._id[1] === "offer") {
      await Items.deleteOne({ _id: id });
      res.json({ msg: "Item Deleted" });
    }
  } catch (e) {
    console.log(e);
  }
};
const getAskedItems = async (req, res) => {
  const askedItems = await AskItems.find();
  res.json(askedItems);
};
const getFilteredAskedItems = async (req, res) => {
  try {
    var queryObj = {};

    if (req.query.type.length > 0) {
      queryObj.type = req.query.type;
    }
    if (req.query.quantity > 0) {
      queryObj.quantity = { $gte: Number(req.query.quantity) };
    }
    if (req.query.condition.length > 0) {
      queryObj.condition = req.query.condition;
    }
    if (req.query.location.length > 0) {
      queryObj.location = req.query.location;
    }
    if (req.query.zipcode.length > 0) {
      queryObj.zipcode = req.query.zipcode;
    }
    const askedItems = await AskItems.find(queryObj);
    res.json(askedItems);
  } catch (e) {
    console.log(e);
  }
};

const attachPhotoInfo = async (req, res) => {
  await Items.findOneAndUpdate({ _id: req.body.id }, { photoInfo: req.body });
  res.json({ msg: "Photo Info Added" });
};

module.exports = {
  getAllItems,
  getSingleItem,
  createSingleItem,
  getFilteredItems,
  getFilteredAskedItems,
  postAskItem,
  getAccountItems,
  getAccountItemsAsked,
  addBookmark,
  getAccountBookmarked,
  getSingleItemAsk,
  editAccountOffered,
  editAccountAsked,
  deleteAllAccountData,
  deleteSingleItem,
  getAskedItems,
  addAskItemBookmark,
  attachPhotoInfo,
};
