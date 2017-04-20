# Slack logger bot

Simple slack bot that can save all of your team messages on your server so that you can still read them even if you exceeds the 10,000 messages in the archive.

The application is built with `Express 4` on `Node.js`

## Version
1.0.0

## How to deply the bot
1. Install `Node.js`. [Check this link](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. clone the repo:
```$
    git@github.com:mlegy/slack-logger-bot.git
```
3. install the application
```$
    npm install & mkdir logs
```
4. Install `forever` to make the application run permanently.
 ```$
    sudo npm install -g forever
 ```
5. Run the application as a service with `forever`
 ```$
    forever start app.js
 ```
6. Add an `Outgoing WebHooks Integration` in your Slack one for each channel [form here](http://slack.com/services/new)
7. In the `URL` filed of every Outgoing WebHooks write your server IP or your domain name followed by port number `3000` and `logbot` route. for example: `http://myteam.com:3000/logbot`
8. The logs will be saved at eg `http://myteam.com/slackbot/logs/channel_name.html`

## Credits
- [@mlegy](https://twitter.com/AhmadMlegy)
- [@Jyny](https://github.com/Jyny)
- [@JDDoesDev](https://github.com/JDDoesDev)
