import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import connectDb from '../../utils/connectDb';
import User from '../../models/User';


export default async (req, res) => {
  connectDb();
  const { email, password } = req.body;
  try {
    // 이미 있는 이메일인지 확인
    const user = await User.findOne({ email }).select('+password');

    // 아니면 에러를 리턴
    if (!user) {
      return res.status(404).send("No user exists with that email");
    }

    // 데이터베이스에 비밀번호 확인
    const passwordsMatch = await bcrypt.compare(password, user.password);

    // 비밀번호가 맞으면 토큰 발급, 만료기간은 7일
    if (passwordsMatch) {
      const token = jwt.sign(
        { userId: user._id }, 
        process.env.JWT_SECRET, 
        { expiresIn: '7d'}
      );
      // 클라이언트에 토큰 전달
      res.status(200).json(token);
    } else {
      res.status(401).send("Password do not match");
    }
  } catch (error) {
    console.error('login error : ', error);
    res.status(500).send("Error logging in user");    
  }
};