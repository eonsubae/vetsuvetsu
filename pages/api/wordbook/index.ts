import mongoose from 'mongoose';

import Wordbook from '../../../models/Wordbook';
import connectDb from '../../../utils/connectDb';

const { ObjectId } = mongoose.Types;

export default async (req, res) => {
  connectDb();
  switch (req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    case "POST":
      handlePostRequest(req, res);
      break;
    case "PUT":
      handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const handleGetRequest = async (req, res) => {
  try {
    const { page, size } = req.query;
    const pageNum = Number(page);
    const pageSize = Number(size);
    let wordbooks = [];
    const totalWordbookCount = await Wordbook.countDocuments();
    const totalPage = Math.ceil(totalWordbookCount / pageSize);
  
    require('../../../models/User');
    if (pageNum === 1) {
      wordbooks = await Wordbook
                          .find()
                          .populate({
                            path: 'user',
                            model: 'User'
                          })
                          .limit(pageSize)
                          .sort({ createdAt: 'desc' });
    } else {
      const skips = pageSize * (pageNum - 1);
      wordbooks = await Wordbook
                          .find()
                          .populate({
                            path: 'user',
                            model: 'User'
                          })
                          .skip(skips)
                          .limit(pageSize)
                          .sort({ createdAt: 'desc' });
    }
    res.status(200).send({ wordbooks, totalPage });
  } catch (error) {
    console.log(error);
  }
};

const handlePostRequest = async (req, res) => {
  const { subject, words, userId } = req.body;
  const parsedId = new ObjectId(userId);
  try {
    const wordbook = await Wordbook.create({ subject, words, user: parsedId });
    res.status(200).send(wordbook);
  } catch (error) {
    console.log(error);
  }
};

const handlePutRequest = async (req, res) => {
  const { subject, words, wordbookId } = req.body;

  try {
    const response = await Wordbook.updateOne({ _id: wordbookId }, { words: words, subject: subject });
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
  }


}