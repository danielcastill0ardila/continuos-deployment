

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
npm install pm2 -g
cd /home/ec2-user/app
sudo npm install
