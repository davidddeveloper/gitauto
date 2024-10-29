const trainingData = [
    {
        "text_input": "On branch main\nChanges to be committed:\n  modified:   src/app.js",
        "output": "Refactor App.js For Better Error Handling\n\nImproved logging and error handling in app.js to provide more visibility into runtime issues."
    },
    {
        "text_input": "diff --git a/src/utils.js b/src/utils.js\nindex abc123..def456 100644\n--- a/src/utils.js\n+++ b/src/utils.js\n@@ -10,6 +10,8 @@ function calculate() {\n   const result = a + b;\n+  logResult(result);\n+  return result;\n}",
        "output": "Add Result Logging To Utils.js\n\nLog results of calculation for better debugging visibility."
    },
    {
        "text_input": "diff --git a/src/auth.js b/src/auth.js\nindex 123456..789abc 100644\n--- a/src/auth.js\n+++ b/src/auth.js\n@@ -5,7 +5,7 @@ function loginUser() {\n-   authenticate();\n+   authenticateUser();",
        "output": "Rename Function In Auth.js\n\nChanged authenticate() to authenticateUser() for better clarity in loginUser flow."
    },
    {
        "text_input": "diff --git a/src/styles.css b/src/styles.css\nindex abc123..def789 100644\n--- a/src/styles.css\n+++ b/src/styles.css\n@@ -12,7 +12,9 @@ body {\n- background-color: #fff;\n+ background-color: #f4f4f4;\n   font-family: 'Arial';\n+  padding: 10px;",
        "output": "Update Body Styles\n\nChanged background color and added padding to improve layout."
    },
    {
        "text_input": "On branch feature/refactor-components\nChanges to be committed:\n  modified:   src/HeaderComponent.js\n  modified:   src/FooterComponent.js",
        "output": "Refactor Header and Footer Components\n\nImproved component reusability and modularity across the app."
    },
    {
        "text_input": "diff --git a/templates/index.html b/templates/index.html\nindex 987654..321abc 100644\n--- a/templates/index.html\n+++ b/templates/index.html\n@@ -15,6 +15,8 @@ <title>Home Page</title>\n <h1>Welcome to our site</h1>\n+<p>New features added!</p>\n <footer>Contact us</footer>",
        "output": "Add New Features Announcement\n\nIncluded a paragraph in index.html to inform users about recent feature updates."
    },
    {
        "text_input": "diff --git a/src/homepage.ts b/src/homepage.ts\nindex 456def..789ghi 100644\n--- a/src/homepage.ts\n+++ b/src/homepage.ts\n@@ -2,6 +2,7 @@ export function loadHomepage() {\n   initHeader();\n+  initSidebar();\n   loadContent();\n}",
        "output": "Add Sidebar Initialization\n\nInitialized sidebar in homepage.ts to improve navigation."
    },
    {
        "text_input": "diff --git a/src/api.js b/src/api.js\nindex abc123..def456 100644\n--- a/src/api.js\n+++ b/src/api.js\n@@ -20,10 +20,12 @@ function fetchData() {\n- fetch(url)\n-  .then(response => response.json())\n+ fetch(url)\n+  .then(response => response.text())\n+  .then(data => JSON.parse(data))\n   .catch(error => console.log(error));",
        "output": "Switch Fetch Response To Text\n\nUpdated API call in api.js to handle plain text and parse it manually."
    },
    {
        "text_input": "diff --git a/static/styles/main.css b/static/styles/main.css\nindex 123abc..456def 100644\n--- a/static/styles/main.css\n+++ b/static/styles/main.css\n@@ -5,7 +5,9 @@ .header {\n- font-size: 16px;\n+ font-size: 18px;\n   color: #333;\n+  margin-bottom: 10px;",
        "output": "Increase Header Font Size\n\nBoosted font size in main.css and added bottom margin for spacing."
    },
    {
        "text_input": "diff --git a/src/main.py b/src/main.py\nindex abc123..789def 100644\n--- a/src/main.py\n+++ b/src/main.py\n@@ -3,7 +3,7 @@ def process_data():\n   data = load_data()\n-   clean_data(data)\n+   preprocess_data(data)\n   save_data(data)",
        "output": "Rename Clean Data Function\n\nReplaced clean_data with preprocess_data in main.py to match naming convention."
    },
    {
        "text_input": "diff --git a/scripts/setup.sh b/scripts/setup.sh\nindex abc123..789xyz 100755\n--- a/scripts/setup.sh\n+++ b/scripts/setup.sh\n@@ -8,6 +8,8 @@ echo 'Setting up the environment...'\n export APP_ENV=development\n+export LOG_LEVEL=debug\n echo 'Environment setup complete'",
        "output": "Add Log Level To Setup Script\n\nIncluded LOG_LEVEL=debug in setup.sh for better logging during development."
    },
    {
        "text_input": "diff --git a/src/login.html b/src/login.html\nindex abc987..def654 100644\n--- a/src/login.html\n+++ b/src/login.html\n@@ -10,7 +10,9 @@ <input type='text' id='username'>\n <input type='password' id='password'>\n+<label for='remember'>Remember me</label>\n+<input type='checkbox' id='remember'>",
        "output": "Add Remember Me Checkbox\n\nInserted a checkbox in login.html to allow users to save login credentials."
    },
    {
        "text_input": "On branch feature/test-suite\nChanges to be committed:\n  new file:   test/apiTest.js",
        "output": "Add API Test Suite\n\nIntroduced unit tests in apiTest.js to validate API functionality."
    },
    {
        "text_input": "On branch main\nChanges to be committed:\n  modified:   src/app.ts\n  modified:   src/routes.ts",
        "output": "Refactor TypeScript Files\n\nUpdated app.ts and routes.ts for improved performance and readability."
    },
    {
        "text_input": "diff --git a/src/component.vue b/src/component.vue\nindex abcdef..123456 100644\n--- a/src/component.vue\n+++ b/src/component.vue\n@@ -2,6 +2,7 @@ <template>\n   <div class='container'>\n+    <p>{{ message }}</p>\n   </div>\n </template>",
        "output": "Bind Message In Vue Component\n\nAdded message binding in component.vue to display dynamic data."
    },
    {
        "text_input": "diff --git a/src/main.py b/src/main.py\nindex 123abc..789xyz 100644\n--- a/src/main.py\n+++ b/src/main.py\n@@ -12,7 +12,8 @@ def main():\n-   run_app()\n+   run_server(debug=True)\n",
        "output": "Switch To Run Server With Debug Mode\n\nReplaced run_app with run_server and enabled debug mode in main.py."
    },
    {
        "text_input": "On branch feature/add-docker\nChanges to be committed:\n  new file:   Dockerfile",
        "output": "Add Dockerfile For Containerization\n\nAdded Dockerfile to support running the application in a container."
    },
    {
        "text_input": "diff --git a/src/signup.html b/src/signup.html\nindex abc987..def654 100644\n--- a/src/signup.html\n+++ b/src/signup.html\n@@ -10,7 +10,9 @@ <input type='email' id='email'>\n+<input type='text' id='phone'>",
        "output": "Add Phone Number Field To Signup Form\n\nIncluded a phone input field in signup.html to collect user contact numbers."
    },
    {
        "text_input": "diff --git a/styles/theme.scss b/styles/theme.scss\nindex 123abc..def456 100644\n--- a/styles/theme.scss\n+++ b/styles/theme.scss\n@@ -5,6 +5,7 @@ $primary-color: #333;\n $secondary-color: #fff;\n+ $highlight-color: #ffcc00;",
        "output": "Add Highlight Color Variable\n\nIntroduced $highlight-color in theme.scss for more customizable styling options."
    },
    {
        "text_input": "diff --git a/src/routes.py b/src/routes.py\nindex 987abc..654def 100644\n--- a/src/routes.py\n+++ b/src/routes.py\n@@ -5,6 +5,8 @@ def home():\n return render_template('home.html')\n+@app.route('/about')\n+def about():\n return render_template('about.html')",
        "output": "Add About Page Route\n\nIncluded new /about route in routes.py to serve the About page template."
    },
    {
        "text_input": "On branch hotfix/fix-crash\nChanges to be committed:\n  modified:   src/server.js",
        "output": "Fix Server Crash Bug\n\nPatched a bug in server.js causing the server to crash on invalid requests."
    },
    {
        "text_input": "diff --git a/src/server.js b/src/server.js\nindex abc123..def456 100644\n--- a/src/server.js\n+++ b/src/server.js\n@@ -25,7 +25,7 @@ function handleRequest(req, res) {\n-   processData(req)\n+   handleData(req)\n   res.end('Done');",
        "output": "Rename Function In Server.js\n\nReplaced processData with handleData for improved clarity."
    },
    {
        "text_input": "diff --git a/styles/main.scss b/styles/main.scss\nindex abc123..def456 100644\n--- a/styles/main.scss\n+++ b/styles/main.scss\n@@ -10,6 +10,8 @@ .header {\n   font-weight: bold;\n+  margin-top: 15px;\n+  padding: 10px;",
        "output": "Add Padding and Margin To Header\n\nUpdated header styles in main.scss for consistent spacing."
    },
    {
        "text_input": "On branch feature/add-api-endpoint\nChanges to be committed:\n  modified:   src/apiRoutes.py",
        "output": "Add New API Endpoint For User Data\n\nCreated endpoint in apiRoutes.py to fetch and return user data."
    },
    {
        "text_input": "diff --git a/components/navbar.vue b/components/navbar.vue\nindex abc123..def456 100644\n--- a/components/navbar.vue\n+++ b/components/navbar.vue\n@@ -5,6 +5,7 @@ <template>\n   <nav>\n+    <ul><li>Home</li><li>About</li></ul>\n   </nav>\n </template>",
        "output": "Add Navigation Links In Navbar\n\nIncluded Home and About links in navbar.vue for improved navigation."
    },
    {
        "text_input": "diff --git a/scripts/setup.sh b/scripts/setup.sh\nindex abc123..def456 100755\n--- a/scripts/setup.sh\n+++ b/scripts/setup.sh\n@@ -12,6 +12,7 @@ echo 'Environment Setup'\n export NODE_ENV=production\n+export API_URL='https://api.example.com'\n echo 'Setup complete'",
        "output": "Add API_URL To Setup Script\n\nSet API_URL environment variable in setup.sh for external API connection."
    },
    {
        "text_input": "diff --git a/src/main.ts b/src/main.ts\nindex abc123..def456 100644\n--- a/src/main.ts\n+++ b/src/main.ts\n@@ -7,6 +7,7 @@ const app = initializeApp();\n+app.use(router);\n app.mount('#app');",
        "output": "Add Router To App Initialization\n\nIncluded router in main.ts to enable navigation within the app."
    },
    {
        "text_input": "On branch refactor/cleanup\nChanges to be committed:\n  modified:   src/helpers.js\n  modified:   src/main.js",
        "output": "Clean Up Helper Functions\n\nOptimized helper functions in helpers.js and streamlined calls in main.js."
    },
    {
        "text_input": "diff --git a/src/index.css b/src/index.css\nindex abc123..def456 100644\n--- a/src/index.css\n+++ b/src/index.css\n@@ -15,7 +15,7 @@ .container {\n-  max-width: 800px;\n+  max-width: 900px;\n  padding: 20px;",
        "output": "Expand Container Width\n\nAdjusted max-width in index.css to accommodate larger screen sizes."
    },
    {
        "text_input": "diff --git a/src/app.py b/src/app.py\nindex abc123..def456 100644\n--- a/src/app.py\n+++ b/src/app.py\n@@ -20,6 +20,8 @@ def handle_request():\n   response = fetch_data()\n+  validate_response(response)\n   return response",
        "output": "Add Response Validation In App\n\nAdded validation in handle_request to improve data handling integrity."
    },
    {
        "text_input": "On branch feature/responsive-design\nChanges to be committed:\n  modified:   styles/main.css",
        "output": "Implement Responsive Design\n\nUpdated main.css with media queries for improved mobile compatibility."
    },
    {
        "text_input": "diff --git a/src/index.js b/src/index.js\nindex abc123..def456 100644\n--- a/src/index.js\n+++ b/src/index.js\n@@ -3,7 +3,8 @@ function initialize() {\n-  startApp()\n+  setupEnvironment()\n+  startApp()\n}",
        "output": "Initialize Environment In Index.js\n\nAdded setupEnvironment call before starting app to prepare configurations."
    },
    {
        "text_input": "diff --git a/templates/dashboard.html b/templates/dashboard.html\nindex abc123..def456 100644\n--- a/templates/dashboard.html\n+++ b/templates/dashboard.html\n@@ -18,7 +18,8 @@ <h1>Dashboard</h1>\n   <div class='stats'>\n-    <p>Data</p>\n+    <p>Updated Data</p>\n+    <p>New Summary Info</p>",
        "output": "Update Dashboard Data Display\n\nAdded updated data and summary info section in dashboard.html."
    },
    {
        "text_input": "On branch fix/auth-bug\nChanges to be committed:\n  modified:   src/auth.js",
        "output": "Fix Authentication Bug\n\nResolved issue in auth.js causing login failures for certain users."
    },
    {
        "text_input": "diff --git a/config/config.json b/config/config.json\nindex abc123..def456 100644\n--- a/config/config.json\n+++ b/config/config.json\n@@ -10,6 +10,7 @@ {\n   \"db\": \"mongodb://localhost\"\n+  \"cache\": \"redis://localhost\"\n }",
        "output": "Add Cache Config To Config.json\n\nIncluded Redis cache config in config.json for faster data access."
    },
    {
        "text_input": "On branch feature/add-tests\nChanges to be committed:\n  new file:   tests/test_login.py\n  new file:   tests/test_signup.py",
        "output": "Add Login and Signup Tests\n\nAdded unit tests for login and signup functionality to improve test coverage."
    },
    {
        "text_input": "diff --git a/src/utils.py b/src/utils.py\nindex abc123..def456 100644\n--- a/src/utils.py\n+++ b/src/utils.py\n@@ -3,7 +3,8 @@ def process_data(data):\n-  clean_data(data)\n+  sanitize_data(data)\n+  filter_data(data)\n  return data",
        "output": "Refine Data Processing In Utils.py\n\nReplaced clean_data with sanitize_data and added filter step for accuracy."
    },
    {
        "text_input": "diff --git a/styles/form.css b/styles/form.css\nindex abc123..def456 100644\n--- a/styles/form.css\n+++ b/styles/form.css\n@@ -5,7 +5,7 @@ .form {\n   font-size: 14px;\n-  border: 1px solid #ddd;\n+  border: 2px solid #333;",
        "output": "Enhance Form Border Styling\n\nUpdated form border to be more prominent and readable."
    },
    {
        "text_input": "diff --git a/src/database.js b/src/database.js\nindex abc123..def456 100644\n--- a/src/database.js\n+++ b/src/database.js\n@@ -8,7 +8,7 @@ function connect() {\n-   db.connect(uri, options)\n+   db.connect(uri, { useNewUrlParser: true })\n}",
        "output": "Set New URL Parser For Database Connection\n\nEnabled new URL parser in database connection for compatibility with latest drivers."
    },
    {
        "text_input": "On branch hotfix/fix-footer\nChanges to be committed:\n  modified:   src/FooterComponent.js",
        "output": "Fix Footer Display Bug\n\nResolved issue causing footer misalignment on mobile screens."
    },
    {
        "text_input": "diff --git a/scripts/deploy.sh b/scripts/deploy.sh\nindex abc123..def456 100755\n--- a/scripts/deploy.sh\n+++ b/scripts/deploy.sh\n@@ -2,7 +2,8 @@ #!/bin/bash\n echo 'Starting deployment'\n- npm install\n+ npm ci\n+ echo 'Clean install completed'",
        "output": "Switch To Clean Install In Deploy Script\n\nReplaced npm install with npm ci for consistent builds in deploy.sh."
    }
]
  
  

module.exports = trainingData;