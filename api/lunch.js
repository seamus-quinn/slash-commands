const fetch = require('node-fetch');

module.exports = (req, res) => {
  const date = Date.now()
  const expiration = date + 1000 * 60 * 60

  console.log(date)
  console.log(expiration)

  const body = {
    "profile": {
      "status_text": "Lunch",
      "status_emoji": ":pizza:",
      "status_expiration": expiration,
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
  .then(json => res.json(json))
}
