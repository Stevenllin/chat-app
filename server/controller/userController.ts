import { Request, Response, NextFunction } from 'express';
import User from '../model/user/userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const register = async (req: Request, resp: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) return resp.json({ msg: 'Username already used', status: false })
  
    const emailCheck = await User.findOne({ email });
    if (emailCheck) return resp.json({ msg: 'Email already used', status: false });
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const jwtKey = "my_secret_key"
    const token = jwt.sign({ username }, jwtKey, {
      algorithm: "HS256",
      expiresIn: '2h'
    });
    console.log('token', token);
    const user = new User({
      username,
      email,
      token,
      password: hashedPassword
    });
    await user.save();
    return resp.json({ status: true, user });
  } catch (error) {
    next(error)
  }
  
}

export { register }