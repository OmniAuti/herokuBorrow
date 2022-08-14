const Items = require("../models/ItemModel");
const AskItems = require("../models/AskModel");
const BookmarkSchema = require("../models/BookmarkModel");

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
      bookmarked: req.body.bookmarked,
    });

    await item.save((err, post) => {
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
    console.log(queryObj);
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
      condition: req.body.condition,
      location: req.body.location,
      zipcode: req.body.zipcode,
      postType: req.body.postType,
      _uid: req.body._uid,
    });

    await askItem.save((err, post) => {
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

  // NEED TO DO SOMETHING TO ACCOUNT FOR MULTIPLE CONDITIONS BEING ASKED. A P TAG THEN INPUT SELECT BELOW IT
  try {
    const id = req.query[0];
    const modalItem = await AskItems.findById(id);
    console.log(modalItem)
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

const bookmarkChangeStatus = async (req, res) => {
  try {
    var item = await Items.findOne({_id: req.body.postId, _uid: req.body._uid})
    item.bookmarked = !item.bookmarked;
    await item.save()
    res.json({msg:'bookmark status changed'})
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};

const postBookmark = async (req, res) => {
  try {

    const item = await BookmarkSchema.find({_uid: req.body._uid, postId: req.body.postId})
    // CHECK TO MAKE SURE IT EXISTS TO NOT DUPLICATE
    if (item.length > 0) {
      res.json({msg: "Already Saved"})
      return;
    }

    const bookmark = new BookmarkSchema({
      _uid: req.body._uid,
      postType: 'bookmark',
      postId: req.body.postId,
    })

    await bookmark.save((err, post) => {
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

const deleteBookmark = async (req,res) => {
  try {
    await BookmarkSchema.deleteOne({_uid: req.body._uid, postId: req.body.postId})
    res.send({msg: 'Bookmark Deleted'})
  } catch (err) {
    console.error
  }
}

const getAccountBookmarked = async (req,res) => {
  const bookmarked = await BookmarkSchema.find({})
  res.status(200).json(bookmarked)
}

const editAccountOffered = async (req, res) => {
  
const item = req.body
var id = item._id;
delete item._id;
 const editItem = await Items.findOneAndUpdate({_id: id}, item)
 res.json({msg:'success', editItem})
}

module.exports = {
  getAllItems,
  getSingleItem,
  createSingleItem,
  bookmarkChangeStatus,
  getFilteredItems,
  postAskItem,
  getAccountItems,
  getAccountItemsAsked,
  postBookmark,
  deleteBookmark,
  getAccountBookmarked,
  getSingleItemAsk,
  editAccountOffered
};
