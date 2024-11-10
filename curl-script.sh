#!/bin/bash

# registering a new user
#curl -X POST -H "Content-Type: application/json" -d '{"email": "ben10@gmail.com", "password": "thequickbrownfox"}' localhost:5000/users/

# login a new user
#curl localhost:5000/connect -H "Authorization: Bearer YmVuMTBAZ21haWwuY29tOnRoZXF1aWNrYnJvd25mb3g="

# fine tuned model
# curl -X POST localhost:5000/fine-tune-model -d '{"name":"gitauto"}' -H "Content-Type: application/json" -H "x-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzAyMTE4NDIsImV4cCI6MTczMjgwMzg0Mn0.q56wPLwilzrU2efdixRQF-OqB2QOarPd82LUlQwxkSE"

# generate commit
curl -X POST http://localhost:5000/generate-commit-msg \
     -H "Content-Type: application/json" \
     -H "X-Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzAyMTE4NDIsImV4cCI6MTczMjgwMzg0Mn0.q56wPLwilzrU2efdixRQF-OqB2QOarPd82LUlQwxkSE" \
     -d '{
           "git_status": "On branch main\nChanges to be committed:\n  modified:   src/app.js",
           "git_diff": "diff --git a/src/app.js b/src/app.js\nindex 83db48f..c76c921 100644\n--- a/src/app.js\n+++ b/src/app.js\n@@ -1,5 +1,5 @@\n const express = require(\"express\");\n const app = express();"
         }'
