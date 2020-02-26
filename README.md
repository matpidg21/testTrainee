# testTrainee
Node.js + Vue.js + MySQL


Backend:
Initialize node.js with express framework, sequelize and passport packages.
s
Setup MySQL database and create model for User table.
Create a few api endpoints:
POST /users/signup 
body: { email, username, password, bio }
returns: code: 201, res: { token: ‘Bearer sometoken’  }
POST /users/login body: { email, password }
body: { email, password }
returns: code: 200, res: { token: ‘Bearer sometoken’  }
GET /users/${id} (returns not secured data for provided user id)
returns: code: 200, res: { email, username, password, bio }
All operations should be in json.
Users Passwords should be encrypted in db.
Token should be Bearer and expiration 15 min.
Frontend:
Initialize Vue framework
Create three pages login and signup with simple forms and user info.
After successful login/signup 
Save token to local storage or cookies
Redirect to user info page
If API returns some error you need show alert with error message
