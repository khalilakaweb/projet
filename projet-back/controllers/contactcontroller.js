exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).send({
        errors: [{ msg: "All contact fields are required" }],
      });
    }

    // For now simply acknowledge receipt. Hook up email/service later.
    res.status(200).send({
      success: [{ msg: "Message received. We'll be in touch soon." }],
    });
  } catch (error) {
    res.status(500).send({
      errors: [{ msg: `Error submitting contact form: ${error.message}` }],
    });
  }
};


