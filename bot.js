const Discord = require("discord.js");
const bot = new Discord.Client({autoReconnect:true});
const fs = require("fs");

bot.on("ready", () => {
  console.log("By Drugs");
  console.log("Logged in " + bot.user.username);

});
const token = "mfa.VPqg1veLFZQa3Iz3dS1Zk89mFE1UDZ760LK_X8nhND1yfYEkZAIpkQPW550B7VPWjGf-6KgnRCAUTga9k49w";
const ownerid = "402308252483977226";
const prefix = "S";

bot.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== ownerid) return;

  if (message.content.startsWith(prefix + 'wat')) {
                
      if(argresult){
         message.channel.send("**You Are Watching **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'WATCHING'});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
   if (message.content.startsWith(prefix + 'stream')) {
                
      if(argresult){
         message.channel.send("**You Are Streaming **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'STREAMING', url:"https://www.twitch.tv/TheFuture"});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	    if (message.content.startsWith(prefix + 'play')) {
             
      if(argresult){
         message.channel.send("**You Are Playing **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'PLAYING'});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
  
    if (message.content.startsWith(prefix + 'listen')) {
               
      if(argresult){
         message.channel.send("**You Are Listening To **" + "`" + `${argresult}` + "`" ).then(message => {message.delete(3000)})
        bot.user.setActivity(argresult, {type:'LISTENING'});
      } else 
      if(!argresult) {
      message.channel.send("**Can You But An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
  } else
	  if (message.content.startsWith(prefix + "dnd")) {
        message.channel.send("**Done Changing Your Status To `DND`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("dnd");
	  } else
		  
      if (message.content.startsWith(prefix + "idle")) {
        message.channel.send("**Done Changing Your Status To `IDLE`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  bot.user.setStatus("idle");
	  } else
		  
	  if (message.content.startsWith(prefix + "off")) {
          message.channel.send("**Done Changing Your Status To `OFFLINE`**").then(message => {message.delete(3000)})
          message.delete(3000);
		  bot.user.setStatus("invisible");
	  } else 

       if (message.content.startsWith(prefix + "مسح")) {

        let count = parseInt(args[0]) || 1;

          message.delete();
          message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id }).then(messages => {
          const prunable = messages.filter(m => m.author.id === bot.user.id);

        return Promise.all(
            prunable.map(m => m.delete())
        ).then(() => {
        });
    }).catch(message.error);
    
} else
 if (message.content.startsWith(prefix + "فكك")) {
   if (args.length < 1) {
        message.channel.send('You must provide text to space out!').then(message => {message.delete(3000)})
    }
       let amount = 2;

    if (!isNaN(args[0])) {
        amount = parseInt(args[0]);
        (amount < 1) && (amount = 1);
        (amount > 15) && (amount = 15);
        args = args.slice(1);
    }
    message.delete();
    message.channel.send(args.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));

 } else

 if (message.content.startsWith(prefix + "منشن")) {
  if (!message.guild || !message.guild.members) {
        message.channel.send('You must run this command from within a server.').then(message => {message.delete(3000)})
    }  
    let members = message.guild.members.array().sort((a, b) => a.user.username.localeCompare(b.user.username));

    if (args.length > 0) {
        members = members.filter(member => hasRole(member, args[0]));
    }

    if (members.length < 1) {
        message.channel.send('No members could be found.').then(message => {message.delete(3000)})
    }

    message.delete();
    let users = members.map(m => `${m.user}${(m.user.bot ? ' [BOT]' : '')}`);
    const body = users.join('\n');

    if (body.length < 2000) {
        message.channel.send(body)//.then(message => {message.delete(60000)})

       let raw = members.map(m => `${m.user.username}${m.user.bot ? ' [BOT]' : ''}`).join('\n');


        let trimmed = body.substr(0, 1500);
        trimmed = trimmed.slice(0, trimmed.lastIndexOf('\n'));
        message.channel.send(trimmed)};


 } else
  if (message.content.startsWith(prefix + "امبد")) {
    if(args){
            let embed = new Discord.RichEmbed()
            //.setAuthor("انتظرتك بس طال الانتظار",message.author.avatarURL)
    .setDescription(args.join("  "))
    .setColor(696969)
    message.channel.sendEmbed(embed);
    message.delete();
      } else 
      if(!args) {
      message.channel.send("**Can You But Something For Me To Transfer it to embed?**").then(message => {message.delete(3000)})          
      }
  
 } else
       if (message.content.startsWith(prefix + "avatar")) {
           var mentionned = message.mentions.users.first();
    var MsH;
      if(mentionned){
          var MsH = mentionned;
      } else {
          var MsH = message.author;
          
      }
          message.channel.send(MsH.avatarURL)
          message.delete(3000);
	  } 
		  
});



bot.login(token);

// functions
function hasRole(member, roleName) {
    return member.roles.map(role => role.name.toLowerCase()).indexOf(roleName.toLowerCase()) > -1;
}


