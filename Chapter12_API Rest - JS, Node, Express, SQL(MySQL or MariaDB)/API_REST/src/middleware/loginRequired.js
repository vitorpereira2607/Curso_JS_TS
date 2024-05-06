import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors: ['Login Required']
    })
  }

  const [ ,token ] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    req.id = id;
    req.email = email;
    console.log(req)
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Invalid or expired token.']
    })
  }

}
