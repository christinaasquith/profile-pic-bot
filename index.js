const { WebClient } = require('@slack/web-api');
const axios = require('axios').default;
const images = {
   "morning": "https://images.unsplash.com/photo-1517188206596-1e1f7c954177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "afternoon": "https://images.unsplash.com/photo-1566452348683-91f934cd9051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  "night": "https://images.unsplash.com/photo-1519446251021-1c4ee77fec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
}

const images = {
  "morning": "https://images.unsplash.com/photo-1517188206596-1e1f7c954177?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "afternoon": "https://images.unsplash.com/photo-1566452348683-91f934cd9051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  "night": "https://images.unsplash.com/photo-1519446251021-1c4ee77fec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
}