function search() {
    $.get('https://my-json-server.typicode.com/drakeaifoce/final/phones', function (resp, status, resp_obj) {
        console.log(status);
        console.log(resp);

        let name = $('#searchfield').val();
	
        for (var i = 0; i < resp.length; i++) {
            $('#search1').html(function (ind, old_value) {
                if (resp[i].name.search(name)) {
                    return resp[i].name;
                }
            })
			
            $('#search2').html(function (ind, old_value) {
                 if (resp[i].name.search(name)) {
                    $('#search2').attr('src', resp[i].image);
                }
            })

            $('#search3').html(function (ind, old_value) {
                if (resp[i].name.search(name)) {
                    return resp[i].price + " ₸";
                }
            })
        }
    })
}

function login() 
{
  $.get('https://my-json-server.typicode.com/drakeaifoce/final/users', function (resp, status, resp_obj) 
  {
      console.log(status);
      console.log(resp);

      let email = $('#email').val();
      let password = $('#pwd').val();

      for (var i = 0; i < resp.length; i++) 
      {
        if(email == resp[i].email)
        {
          if(password == resp[i].password)
          {

            $('#username').html(function (ind, old_value) 
            {
                return resp[i].name;             
            })

            $('#user_email').html(function (ind, old_value) 
            {
                return resp[i].email;             
            })
          
            // document.getElementById('hide').style.display = 'none';
            $("#hide").hide();

            break;
          }
        }
      }
  })
}

function post() {
  let id = $.get('https://my-json-server.typicode.com/drakeaifoce/final/users', function (resp, status, resp_obj) {
    return resp.length + 1;
  })
  let user = $('#name').val();
  let email = $('#email').val(); 
  let password = $('pwd').val();
  // let flag = $.get('https://my-json-server.typicode.com/drakeaifoce/final/users', function (resp, status, resp_obj) {
  //   for(i=0;i<resp.length;i++){
  //     if(email == resp[i].email){
  //       return 2;
  //     } 
  //     else if(user == resp[i].name){
  //       return 0;
  //     }
  //     else {
  //       return 1;
  //     }
  //   }
  // })

  // if(flag == 1){
    fetch('https://my-json-server.typicode.com/drakeaifoce/final/users', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        email: email,
        name: user,
        password: password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      console.log(data);
      $("#hide1").hide();
      $('#success').html(function (ind, old_value) 
      {
          return "Successfully registered";             
      })
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    })
    
  // } else if (flag == 0){
  //   $('#success').html(function (ind, old_value) 
  //     {
  //         return "Username is already taken";             
  //     })
  // } else if (flag == 2){
  //   $('#success').html(function (ind, old_value) 
  //     {
  //         return "Email is already taken";             
  //     })
  // }
 
}

function get(){
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
      if(this.readyState === 4) {
          if(this.status == 200) {
              console.log('Response is received');
              console.log(JSON.parse(this.responseText));
          }
          else{
              console.log('Request failed')
          }
      }
  }

  http.open('GET', 'https://my-json-server.typicode.com/drakeaifoce/final/users', true);
  http.send();
}

// function register() {
//   $.get('https://my-json-server.typicode.com/drakeaifoce/final/users', function (resp, status, resp_obj) {
//  console.log(resp);
//   let user = $('#name').val().toLowerCase();
//   let email = $('#email').val().toLowerCase();    
//   let id = $('#id').val().toLowerCase();

//   for(var j = 0; j< id; j++){
//     $('#info1').html(function (ind, old_value) {      
//     if(resp[j].id == id){
//       if(resp[j].email == email){
//         if(resp[j].user == user){
//         return "This account exists, try again";
//         }
//         else {
//           return "This account exists, try again";
//         }
//       }
//       else{
//         return "This account exists, try again";
//       }
//       }
//     else {
//       return "Success!";
//     }
//       })
//     }
  
//   })
// }