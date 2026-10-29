/*
.env file details
==================
TTA_ENV=qa
BASE_URL=https://app.thetestingacademy.com
QA_BASE_URL=https://app.thetestingacademy.com
STG_BASE_URL=https://stage.app.thetestingacademy.com
PROD_BASE_URL=https://app.thetestingacademy.com
DEV_BASE_URL=http://localhost:3000
API_BASE_URL=https://restful-booker.herokuapp.com
LOG_LEVEL=info
ATTACH_SCREENSHOTS=false
TEST_ENV=QA
TEST_AUTHOR=TTA-QA

# e2e-checkout-env.spec.ts
STANDARD_USER=standard_user
TTA_SECRET=tta_secret
CHECKOUT_ITEM_ID=test-allthethings-t-shirt-red
CHECKOUT_FIRST_NAME=Pramod
CHECKOUT_LAST_NAME=Dutta
CHECKOUT_POSTAL_CODE=560001

# --- AI agent layer (src/ai) ---
# Every key below is OPTIONAL. With none set, each agent returns an
# "unavailable" result, the AI report tabs stay empty, and the suite s...
# passes. That is the CI path, which is why this file ships them

AI_PROVIDER=deepseek

DEEPSEEK_API_KEY=

*/
/*
Testdata
========
[
  {
    "username": "standard_user",
    "password": "tta_secret"
  },
  {
    "username": "locked_out_user",
    "password": "tta_secret"
  },
  {
    "username": "problem_user",
    "password": "tta_secret"
  },
  {
    "username": "performance_glitch_user",
    "password": "tta_secret"
  },
  {
    "username": "error_user",
    "password": "tta_secret"
  },
  
  {
    "username": "visual_user",
    "password": "tta_secret"
  }
]
*/