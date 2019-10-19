import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import connectDb from '../../utils/connectDb';
import User from '../../models/User';

const { ObjectId } = mongoose.Types;

export default async (req, res) => {
  connectDb();
  const { authorization } = req.headers;
  const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);

  try {
    const user = await User.findOne({ _id : new ObjectId(userId) });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }

};