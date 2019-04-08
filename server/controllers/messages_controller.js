let messages = []
let id = 0



module.exports = {
  create: (req, res) => {
    const { text, time } = req.body

    messages.push({ id, text, time })
    id++
    res.status(200).send(messages)


  },
  read: (req, res) => {

    res.status(200).send(messages)

  },
  update: (req, res) => {
    let { id } = req.params;
    let {text}=req.body
    let index=messages.findIndex(message=>message.id==id)
    let message= messages[index]

    messages[index]= {
      id: message.id,
      text: text || message.text,
      time: message.time
    }
    res.status(200).send(messages)
  },
  delete: (req, res) => {
    let {id} =req.params;
    let index=messages.findIndex(message=>message.id==id)
    messages.splice(index, 1)
    res.status(200).send(messages)


  },
}
