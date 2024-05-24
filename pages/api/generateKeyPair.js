const crypto = require('crypto')
const promisify = require('util').promisify

const generateKeyPairAsync = promisify(crypto.generateKeyPair)

export default async function handler(req, res) {
  try {
    const { publicKey, privateKey } = await generateKeyPairAsync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      }
    })
    res.json({
      publicKey,
      privateKey
    })
  } catch (err) {
    console.log(err)
    res.send(401).json({ err: 'Error creating key pair' })
  }
}
