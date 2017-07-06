
// req - data that comes in
// res - data that goes out
exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Index'
  });
};

exports.addStore = (req, res) => {
  res.render('editStore', {title: 'Add Store'});
};

exports.createStore = (req, res) => {
  // console.log(req.body);
  res.json(req.body);
};
