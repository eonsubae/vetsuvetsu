import mongoose from 'mongoose';

import Wordbook from '../../models/Wordbook';
import connectDb from '../../utils/connectDb';

const { ObjectId } = mongoose.Types;
connectDb();

export default async (req, res) => {
  const { subject, words, userId } = req.body;

  try {
    const wordbook = await Wordbook.create({ subject, words, user: new ObjectId(userId) });
    res.status(200).send(wordbook);
  } catch (error) {
    console.log(error);
  }
};