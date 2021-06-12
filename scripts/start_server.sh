APP_NAME='web-api'
cd /home/ec2-user/app/
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm use node
pm2 delete ${APP_NAME}
pm2 start index.js --name ${APP_NAME}