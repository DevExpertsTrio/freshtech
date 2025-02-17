const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
    },
    rating: {
      type: Number,
      default: 1,
      // min and max could be used with numbers and date.
      min: [1, 'A tour must have rating greater than 1.'],
      max: [5, 'A tour must have rating less than or equal to 5.'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'A review should be for a tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A review should be given by a user.'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Creating compound index for user and tour to prevent duplication of the reviews.
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: 'user', select: '-__v' });
  next();
});

reviewSchema.statics.calcRatingsAverage = async function (tourId) {
  // Use aggregate pipeline to calculate average and number or ratings.
  const stats = await this.aggregate([
    {
      $match: { tour: tourId },
    },
    {
      $group: {
        _id: '$tour',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);

  // console.log(stats);

  // Update stats in tour documents.
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsAverage: stats[0].avgRating,
      ratingsQuantity: stats[0].nRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsAverage: 0,
      ratingsQuantity: 4.5,
    });
  }
};

reviewSchema.post('save', function () {
  // this points to the current review document.
  // we have added this for the post save because the database gets review after save.
  // post middleware doesn't have access to the next().
  this.constructor.calcRatingsAverage(this.tour);
});

// We are using pre middleware to execute the query and get the document.
// Because we have only query in "this".
// findByIdAndUpdate or findByIdAndDelete are using findOneAnd queries.
reviewSchema.pre(/^findOneAnd/, async function (next) {
  // saving document in this as rev and pass it to post middleware.
  this.rev = await this.model.findOne(this.getQuery());
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  await this.rev.constructor.calcRatingsAverage(this.rev.tour);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
