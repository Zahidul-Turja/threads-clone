import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, //! The browser/js can not access this cookie so more secure
    maxAge: 15 * 24 * 60 * 60 * 1000, //! 15 days
    sameSite: "strict", // ! Protecting from CSRF attack
  });

  return token;
};

export default generateTokenAndSetCookie;
