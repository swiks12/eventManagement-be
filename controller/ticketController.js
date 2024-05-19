const Ticket = require("../models/ticket");

const allOrganizerEvents = async (req, res) => {
  const organizerId = req.params.organizerId;
  try {
    const allOrganizerEvent = await Ticket.find({ organizerId });
    res.json({ allOrganizerEvent });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

module.exports = allOrganizerEvents;
