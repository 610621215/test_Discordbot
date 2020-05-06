require('dotenv').config();
const Discord = require('discord.js');//client
const TOKEN = process.env.TOKEN;
const client = new Discord.Client();
var mon_hp=30;
var can_fight=0;
var head=0;
var act=new Array();{
  act[0]='atk';

}

var sentence;

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
  client.channels.find(x=>x.name==='test2').send('Hello!I\'m now connected!');

});
client.on('message',(msg)=>{
        // console.log(`未過濾的句子`);
        // console.log(msg);
        // if(msg.member.user.username!="the_new01"){
          var tt=msg.author.username;
          var content=msg.mentions._content;
          var test = content.split(" ");
          console.log(test);
          if(tt!='the_new01'&&test[0]==='!join'){
              msg.channel.send(`${tt}參與了，迷霧變得比剛剛更強了!`);
              tobattle(tt,'假人B',30,mon_hp,3,5,msg);
              msg.channel.send(`結束了`);
          }
          console.log(`更新了${head}`);
          head=head+1;
});
function playersevent(the_event,user_name,msg){
  switch(the_event){
    // case '!join':
    //   msg.channel.send(`參加人 ${user_name} !`);
    //   msg.channel.send(`選項:${act[0]}`);
    //   msg.channel.send(`回應!atk`);
    //   msg.channel.send(`場上煙霧瀰漫了起來!`);
    // break;
    case '!atk':
    msg.channel.send(`回應衝擊`);
    return true;
    break;
  }
    msg.channel.send(`思考時間5秒`);
    setTimeout(()=>{console.log('test');}, 5000);
    msg.channel.send(`失去決定權`);
    return false
}
function tobattle(a_name,b_name,a_hp,b_hp,a_atk,b_atk,msg){//此為1打1
  if(a_hp<=0||b_hp<=0){
    if(a_hp<=0){
      var s=`${a_name}倒下`;
      console.log(`${a_name}倒下`);
      msg.channel.send(`${a_name}倒下`);
    }
    if(b_hp<=0){
      var s=`${b_name}倒下`;
      console.log(`${b_name}倒下`);
      msg.channel.send(`${b_name}倒下`);
    }
    return false;
  }
  console.log(`由${a_name}對${b_name}攻擊`);
  // msg.channel.send(`由${a_name}對${b_name}攻擊`);
  // setTimeout(()=>{console.log('test');}, 3000);
  //傷害判定可以從此修改
  
  b_hp=b_hp-a_atk;

  console.log(`由${a_name}對${b_name}攻擊，${b_name}hp:${b_hp}`);
  msg.channel.send(`由${a_name}對${b_name}攻擊，${b_name}hp:${b_hp}`);
  tobattle(b_name,a_name,b_hp,a_hp,b_atk,a_atk,msg);
}
function splitStr(str) {

    // Function to split string
    var string = str.split("*");

    console.log(string);
}
function function2() {
    // all the stuff you want to happen after that pause
    console.log('Blah blah blah blah extra-blah');
}
client.login(TOKEN);
