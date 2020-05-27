const BASE_ACCESS_CODE_URL = "https://www.facebook.com/v7.0/dialog/oauth?";
const BASE_ACCESS_TOKEN_URL = "https://graph.facebook.com/v7.0/oauth/access_token?";
const SCOPE = "user_friends user_photos instagram_basic pages_show_list instagram_manage_insights pages_show_list";
const CLIENT_ID = "<>";
const CLIENT_SECRET = "<>";
const REDIRECT_URL = "http://localhost:3000/test-face-2";



function test(resp,rep){
  var url = BASE_ACCESS_CODE_URL + "&scope="+ SCOPE +"&client_id="+ CLIENT_ID +"&response_type=code&redirect_uri=" +REDIRECT_URL;
  url = encodeURI(url);
  console.log(url);
  rep.redirect(url);

  // request.get(url,function(err,res,body){
  //   rep.send(body);
  // });
}

function test2(code,resp,rep){
  console.log(code);
  var url = BASE_ACCESS_TOKEN_URL+"client_secret=" + CLIENT_SECRET +"&client_id="+ CLIENT_ID +"0&grant_type=authorization_code&code="+code+"&redirect_uri="+REDIRECT_URL;
  url = encodeURI(url);
  rep.redirect(url);

  // request.get(url,function(err,res,body){
  //   rep.send(body);
  // });
}

exports.facebook = test
exports.facebook.dummyTest2 = test2
