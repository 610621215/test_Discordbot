require('dotenv').config();
const Discord = require('discord.js');//client
const TOKEN = process.env.TOKEN;
var update_count=0;
var vlist= testgogo();
var canplay=true;
const client = new Discord.Client();
client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
  //console.log(steal);
  client.channels.find(x=>x.name==='test').send('Hello!I\'m now connected!');
  // var test=client.channels.type;
  // var test2='asd';
  // var myJSON = JSON.stringify(test);
  // console.log(myJSON);
  // client.channels.find(x=>x.name==='test').send(test2);

});
client.on('message',(msg)=>{
      console.log(msg);
      const part1='';
      if(msg.content==='!rule'){
            msg.channel.send('!submit + 答案');
            msg.channel.send('ex: !submit 2576');

      }
      if(msg.content==='ping'){
            msg.channel.send('pong');

      }
      if(msg.content==='whosthat'){
                msg.channel.send(`it's ${msg.author} !`);
      }
      var sentence = msg.mentions._content;
      var str =sentence;
      // console.log(str.replace('!submit ', ''));
      // sentence=str.replace('!submit ', '');
      // if(msg.member.user.username!="the_new01"&&sentence.length!=4){
      //     msg.channel.send('只能是四位數字');
      //   canplay=false;
      // }
      // if(msg.member.user.username!="the_new01"&&sentence.search((/[^A-Za-z\s]/))==0){
      //     msg.channel.send('不可以由非數字構築而成');
      //     canplay=false;
      //
      // }
      // if(allnum(sentence)){
      //   msg.channel.send('不可以由非數字構築而成');
      //   canplay=false;
      //
      // }
      if(sentence.includes('!submit')&&msg.member.user.username!="the_new01"){
        var str =sentence;
        console.log(str.replace('!submit ', ''));
        str=str.replace('!submit ', '');
        // var obj =msg.channel.name;
        // console.log(obj);
        // var obj2 =msg.mentions._content;
        // console.log(obj2);
        // console.log(`更新 ${update_count} 次`);
        // console.log(`本次答案為: ${vlist}`);
        // var guess=obj2;
        console.log(`str:${str}`);
        var guess=str;
        var guess_result=towin(vlist,guess);
        console.log(towin(vlist,guess));
        msg.channel.send(`本次作答: ${guess} 結果為: ${guess_result[0]}A ${guess_result[1]}B  `);
        update_count=update_count+1;
      }
      if(msg.content==='!answer'){
            msg.channel.send(`答案是${vlist}`);

      }
      var obj3=msg.member.name;
      var obj4=msg.member.user.username;
      // the_new01
      // console.log(obj4);
      // msg.channel.send('test');
      msg.mentions._content=null;
      sentence =null;
});

function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
};
function testgogo(){
  var vlist=[];
  var i=0;
  var j=0;
  const min =1;
  const max=9;
  for(i=0;i<4;i++){
      var tp=getRandom(min,max);
      while(duplicate(vlist,tp)){
        tp=getRandom(min,max);
      }
      vlist[i]=tp;
    }
      console.log(vlist);
      return vlist;
}
function duplicate(list1,tp){
  var result=false;
  for(j=0;j<list1.length;j++){
      if(tp==list1[j])
        return true;

  }

  return result;

}
// function allnum(value){
// // !validator.isAlpha(val))
//     for(var i=0;i<value.length;i++){
//         if(validator.isAlpha(value[i])){
//           return true;
//         }
//
//     }
//     return false;
// }
function towin(vlist,guess){
  var A=0;
  var B=0;
  var test=[guess[0],guess[1],guess[2],guess[3]];
  console.log(test);
  console.log(vlist);
  console.log(vlist.length);
  for(var i=0;i<vlist.length;i++){
      for(var j=0;j<vlist.length;j++){
          if(vlist[i]==test[j]&&i==j){
            console.log("做了");
              A=A+1;
          }else if(vlist[i]==test[j]){
              B=B+1;
          }
      }

  }

  console.log(`${A}A , ${B} B`);
    return [A,B];
}
client.login(TOKEN);
