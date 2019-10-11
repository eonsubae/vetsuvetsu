import mongoose from 'mongoose';

import Wordbook from '../../models/Wordbook';
import connectDb from '../../utils/connectDb';
import User from '../../models/User';

const { ObjectId } = mongoose.Types;
connectDb();

export default async (req, res) => {

  switch (req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    case "POST":
      handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const handleGetRequest = async (req, res) => {
  try {
    const response = await Wordbook.find({}).populate({
      path: 'user',
      model: 'User',
    });
    res.status(200).send(response);
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