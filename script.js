function calcUserName(userName){
      if (users.length > 5){
            console.log(userName.name + '(5ta harifdan katta)');
      }else{
            console.log(userName + '(5ta harifdan kichik)');
      }
}

let users = [
      {
            name: 'Alex'
      },
      {
            name: 'Jack'
      },
      {
            name: 'Adrian'
      },
      {
            name: 'Anthony'
      },
      {
            name: 'Donald'
      },
      {
            name: 'Jack'
      },
      {
            name: 'Carl'
      },
      {
            name: 'Rose'
      },
      {
            name: 'Christian'
      },
      {
            name: 'Lisa'
      }
];

for(let i = 0; i < users.length; i++){
      calcUserName(users[i]);
}