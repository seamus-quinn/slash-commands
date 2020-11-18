const fetch = require('node-fetch');

module.exports = (req, res) => {
  const date = new Date()
  const expiration = date.getMinutes(date.getMinutes() + 2)

  console.log("**************")
  console.log(expiration)
  console.log("**************")


  const body = {
    "profile": {
      "status_text": "Lunch",
      "status_emoji": ":pizza:",
      "status_expiration": date,
    }
  }
  fetch('https://slack.com/api/users.profile.set', {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${process.env.SLACK_XOXP_TOKEN}`
    },
  })
  .then(res => res.json())
  .then(json => {
    console.log(res.json(json))
    return res.json(json)
  });
}
