# Zarf Tareq #
A website that is a dictionary for Arabic colloqial words and that offers users the option to lookup and define colooquial words in the Arabic language.


### Installation ###
For the backend of this project, we are using node. Make sure you have the latest version of node installed on your device. [Get Node here.](https://nodejs.org/en/)  

Once you have node installed, cd into your cloned directory and run the follow command to insall all dependencies  

> npm install

Once installed, you should see a `node_modules` directory in the root directory. You are almost ready, but not quite there. To run the app, you need to connect to mongodb, and you can do that by creating a new file called `properties.js` in `confg/mongo`and copy the following command and paste it there, replacing the `username` and `password` with your respective database user account.  

>  module.exports = {
    'url' : "mongodb+srv://username:password-cluster.nvgvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
   };
 
Your app is then ready to start. Run the following command to start your app:  

> npm start

Keep in mind that the server will restart automatically everytime a change is introduced in the code. 