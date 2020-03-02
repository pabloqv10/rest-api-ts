import { Request, Response } from 'express'
import User, { IUser } from '../models/user'

export const signUp = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({ msg: 'Please send your email and password' })
  }

  const user = await User.findOne({ email })

  if (user) {
    return res.status(400).json({ msg: 'The user already exists' })
  }

  const newUser = new User({ email, password })
  await newUser.save()

  return res.status(201).json(newUser)
}

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({ msg: 'Please send your email and password' })
  }

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(400).json({ msg: 'The user does not exists' })
  }

  const isMatch = await user.comparePassword(password)

  if (isMatch) {
    return res.json({ token: 'asasasasad' })
  }
}
