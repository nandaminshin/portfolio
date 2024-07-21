const Message = require('../Models/Message');

const MainController = {
  index: (req, res) => {
    res.render('index');
  },

  inbox: async (req, res) => {
    let { name, email, subject, messageBody } = req.body;
    let message = new Message({
      name: name,
      email: email,
      subject: subject,
      messageBody: messageBody
    });
    await message.save()
    res.redirect('/');
  },

  checkMessage: async (req, res) => {
    let messages = await Message.find();
    res.render('checkMessage', {
      messages
    });
  },

  destoryMessage: async (req, res, next) => {
    try {
      let id = req.params.id;
      await Message.findByIdAndDelete(id);
      res.redirect('/check-inbox');
    } catch (error) {
      console.log(error);
      next();
    }
  }


}

module.exports = MainController;