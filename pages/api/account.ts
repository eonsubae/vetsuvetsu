import mongoose from 'mongoose';

import connectDb from '../../utils/connectDb';
import Wordbook from '../../models/Wordbook';

const { ObjectId } = mongoose.Types;

export default async (req, res) => {
  connectDb();
  const userId = req.query.id;
  try {
    const { page, size } = req.query;
    const pageNum = Number(page);
    const pageSize = Number(size);
    let wordbooks = [];
    const totalWordbookCount = await Wordbook.find({ user: userId }).countDocuments();
    const totalPage = Math.ceil(totalWordbookCount / pageSize);
  
    if (pageNum === 1) {
      wordbooks = await Wordbook
                          .find({ user: ObjectId(userId) })
                          .limit(pageSize)
                          .sort({ createdAt: 'desc' });
    } else {
      const skips = pageSize * (pageNum - 1);
      wordbooks = await Wordbook
                          .find({ user: ObjectId(userId) })
                          .skip(skips)
                          .limit(pageSize)
                          .sort({ createdAt: 'desc' });
    }
    res.status(200).send({ wordbooks, totalPage });
  } catch (error) {
    console.log(error);
  }
};