const Notification = require("../models/notification.model");

exports.acceptNotificationRequest = (req, res) => {
    try{
  const Notification = {
    subject: req.body.subject,
    recepientEmails: req.body.recepientEmails,
    content: req.body.content,
    requester: req.body.requester,
    status: req.body.status 
  };

  const notification = await  Notification.create(Notification).save()
   res.status(201).send({
    message:"Request accepted",
    trackingId:notification._id
   })
}catch(err){
    console.log('Error while storing the notification request',err)
    res.status(500).send({
        message: "Some internal server error "
    })
} 
};


exports.getNotificationDetails =async (req,res) =>{
    try{
        const trackingId = req.params.id
        const notification = await Notification.findOne({_id:trackingId})
       res.status(200).send(notification)
    }catch(err){
        console.log('Error while storing the notification request',err)
        res.status(500).send({
            message: "Some internal server error "
        })
    } 

}
