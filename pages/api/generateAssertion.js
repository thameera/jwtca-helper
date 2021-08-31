import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

export default function handler(req, res) {
  console.log('here')
  const body = req.body

  const payload = {
    iss: body.client_id,
    sub: body.client_id,
    aud: body.aud,
    jti: uuidv4(),
  }
  const opts = {
    algorithm: 'RS256',
    keyid: body.kid,
    expiresIn: body.expiry,
  }

  const token = jwt.sign(payload, body.key, opts)
  console.log(token)

  res.json({ token })
}
