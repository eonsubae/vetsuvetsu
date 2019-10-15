import Wordbook from '../../../models/Wordbook';
import connectDb from '../../../utils/connectDb';

connectDb();

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      handleGetRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  };
};

const handleGetRequest = async (req, res) => {
  try {
    const wordbook = await Wordbook.findById({ _id : req.query.slug });
    res.status(200).json(wordbook);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');  
  }
};