const Ticket = require("../models/ticket");
const Event = require("../models/event");


const allOrganizerEvents = async (req, res) => {
  const organizerId = req.params.organizerId;
  try {
    const allOrganizerEvent = await Ticket.find({ organizerId });
    res.json({ allOrganizerEvent });
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};


const eventUserDetails = async (req, res) => {
  const organizerId = req.params.organizerId;
  try {
    const eventUsers = await Ticket.find({ organizerId });

    var results = await Promise.all(eventUsers.map(async (item) => {
      const eventDet = await Event.findOne({ eventId: item.eventId });
      console.log(eventDet, 'eventDet');
      return ({...item.toObject(), eventName: eventDet.name, eventPrieventDetce: eventDet.price});
  }));

  console.log(results, 'results');


    const events=[];
    const users=[];


    // eventUsers.map(item => {
    //   if(!events.includes(item.eventId)) {
    //     events.push(item.eventId)
    //   }
    // })

    // eventUsers.map(item => {
    //   if(!users.includes(item.userId)) {
    //     users.push(item.userId)
    //   }
    // })

    console.log(events, 'events')
    console.log(users, 'users')

  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
};

module.exports = {allOrganizerEvents,eventUserDetails};
