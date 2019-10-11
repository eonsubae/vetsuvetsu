import mongoose from 'mongoose';

const { String, ObjectId } = mongoose.Schema.Types;

const WordbookSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  words: {
    type: [],
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Wordbook || mongoose.model('Wordbook', WordbookSchema);