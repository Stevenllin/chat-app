import { Request, Response, NextFunction } from 'express';
import Messages from '../model/message/messageModel';

const getMessages = async (req: Request, resp: Response, next: NextFunction) => {
  try {
    const { from, to } = req.body;

    const messages = await Messages.find({
      users: {
        $all: [from, to]
      },
    }).sort({ updatedAt: 1 })

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text
      }
    })
    return resp.json({
      messages: {
        projectedMessages
      }
    })
  } catch (ex) {
    next(ex)
  }
}

const addMessages = async (req: Request, resp: Response, next: NextFunction) => {
  try {
    const { from, to, message } = req.body;
    const newMessage = new Messages({
      message: { text: message },
      users: [from, to],
      sender: from,
    })
    await newMessage.save()
    return resp.json({ msg: "Message added successfully." });
  } catch (ex) {
    next(ex)
  }
}

export { getMessages, addMessages }
