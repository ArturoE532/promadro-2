const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordFiel: 'password'
}, async (email, password, done) => {
    
    //Compureba si coincide el usuario
    const user = await User.findOne({email})
    if (!user) {
        return done(null, false, {message: 'No se encuentra el usuario'});
    } else {
        //Compruena la contraseña
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'Constraseña incorrecta'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});