const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('../config/keys');

const User = mongoose.model('users');


console.log('passport');

passport.serializeUser((user, done) => {
  console.log('passport serializeUser');

  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('passport deserializeUser');

  User.findById(id)
    .then(user => {
      done(null, user);
    })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {

      try {
        const existingUser = await User.findOne({ googleId: profile.id })

        if (existingUser) {
          done(null, existingUser)
        }
        const user = await new User({ googleId: profile.id }).save();

        done(null, user)

      } catch (error) {
        console.log(error);

      }

    }
  )
);

