const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slugs = require('slugs');

//storeSchema describes what our data looks like
const storeSchema = new mongoose.Schema({
  name:{
    type:String,
    trim: true,
    required: 'Please enter a store name!'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]
});

//auto-generate slug field before saving
storeSchema.pre('save', function(next) {
  if (!this.isModified('name')){
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  next();

  // TO DO make more resilient so slugs are unique
});

module.exports = mongoose.model('Store', storeSchema);