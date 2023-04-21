const currentUser = async (req, res) => {
  const { email, phone, avatarURL, birthday, skype, name } = req.user;

  res.status(200).json({
    user: {
      email,
      phone,
      avatarURL,
      birthday,
      skype,
      name,
    },
  });
};

module.exports = { currentUser };
