import { Request, Response, NextFunction } from 'express';
import User from '../model/user/userModel';
import { UserState } from '../model/user/types';
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

const login = async (req: Request, resp: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) return resp.json({ msg: 'Incorrect username or password', status: false })

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return resp.json({ msg: 'Incorrect username or password', status: false })
    return resp.json({ status: true, user: user });
  } catch (error) {
    next(error)
  }
}

const setAvatar = async (req: Request, resp: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image

    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    );
    return resp.json({
      isAvatarImageSet: userData && userData.isAvatarImageSet,
      avatarImage: userData && userData.avatarImage,
    });
  } catch (error) {
    next(error)
  }
}

export { register, login, setAvatar }