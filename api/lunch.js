const fetch = require('node-fetch');

module.exports = (req, res) => {
  const date = new Date()
  const expiration = date.setHours(date.getHours() + 1)
  const expirationTwo = date.setSeconds(date.getSeconds() + 30)

  console.log(process.env.SLACK_XOXP_TOKEN)

  console.log(new Date(expirationTwo))

  const body = {
    "profile": {
      "status_text": "Lunch",
      "status_emoji": ":pizza:",
      // "status_expiration": expiration,
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
  .then(json => res.json(json));
}
