set -e

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

sudo chmod -R 777 /home/ec2-user/app
nvm use node
cd /home/ec2-user/app

npm install
npm install pm2 -g


