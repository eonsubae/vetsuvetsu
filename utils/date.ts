const formatKr = (date) => {
  return new Date(date).toLocaleDateString('ko-KR');
};

export default formatKr;