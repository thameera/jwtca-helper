const crypto = require('crypto')

export default function handler(req, res) {
  crypto.generateKeyPair('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    }
  }, (err, publicKey, privateKey) => {
    if (err) {
      console.log(err)
      res.send(401).json({ err: 'Error creating key pair' })
      return
    }

    res.json({
      publicKey,
      privateKey
    })
  })
}
