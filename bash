node server.js
git add server.js
git commit -m "Use dynamic port for Render deployment"
git push
curl -X POST https://crystalschatapp3.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"test"}'
/api/auth/login
