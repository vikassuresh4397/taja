const auth = (req, res, next) => {
  const { password, role } = req.query;
  if ((password === '7877') && (role === 'admin' || role === 'instructor')) {
    next();
  } else {
    res.status(403).send('You are not authorized to perform this operation');
  }
};
module.exports = {
  auth,
};

//+1
