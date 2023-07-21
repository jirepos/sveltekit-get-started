function getEnv {
  $Env:DOTENV_CONFIG_PATH = "./env/.env.development";  node  -r dotenv/config ./scripts/getenv.js
}
# 함수 호출
getEnv
