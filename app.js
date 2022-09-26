// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require("express")
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express()
// 웹브라우저에서 보낸 데이터를 받아서 처리하는 body-parser를 불러온다.
const bodyParser = require('body-parser')

// 3000 포트로 서버 오픈
app.listen(3000, () => {
  console.log("start! express server on port 3000")
})

// '/'는 http://localhost:3000/
// '/login'는 http://localhost:3000/login 
// 라우터(경로)
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/main.html")
})
app.get('/main', (req, res) => {
  res.sendFile(__dirname + "/public/main.html")
})
// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static('public'))
// 브라우저에서 오는 응답이 json 일수도 있고, 아닐 수도 있으므로 urlencoded() 도 추가한다.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// form.html 클라이언트에서 넘겨준 값인 req.body.email을
// email.ejs의 email 변수에 넣고 
// localhost3000:/email_post에 email.ejs를 렌더링한다.
app.post('/email_post', (req,res) => {
  res.render("email.ejs" , {'email': req.body.email})
})
// ejs 는 별다른 require가 필요하지 않다.
app.set('view engine', 'ejs')
