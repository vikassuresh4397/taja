const auth = (req, res, next) => {
  const { role, pass } = req.headers;
  if (role === 'admin' && pass === 'saveEarth') {
    next();
  } else {
    res.status(401).json({ message: 'Not Authorized' });
  }
};

module.exports = {
  auth,
};
