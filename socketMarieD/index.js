const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var i;

//Liste des utilisateurs connectés 
var users = [];

//utilisateur connecté 
var logUser;
// une connection vers le chat
io.on('connection', socket =>{
    var stock= null;
    var cpt =0;""
    // even user-connect pour chaque utilisateur connecté  
    for(i=0; i< users.length; i++){
        socket.emit('user-login', users[i]);
    }

    // Connextion d'un utilsateur via le formulaire
    socket.on('user-login', function(user,callback){
        //nouvelle utilisateur
        var userInd = -1;
        for(i = 0; i< users.length;i++){
            if(user[i].username === username){
                userInd = i ;
            }
        }
        // si l'utilsateur est bien nouveau alors:
        if(user !== undefined && userInd=== -1){
            //Sauvegarde de l'utilisateur 
            logUser = user;
            users.push(logUser);

        }
    })
    // un utilisateur
    console.log('user connected : ', socket.id);
    cpt = cpt + 1;
    console.log(cpt);
    socket.on('loaded', data =>{
        console.log('data from client : ', data)
        });
    
    // un utlisateur reçoit le message
    socket.on('message', (data) =>{
            var date = new Date();
            var heure =date.getHours();
            var minute=date.getMinutes();
            var seconde=date.getSeconds();

            
            console.log('message received : ', data);
            var string = heure + ":" + minute + ":" + seconde;
            console.log ("l'heure à laquelle le message est envoyé :", string);
            data =  data + ' - '+ string;
            console.log("message with pseudo : ", data);

             // on stocke les messages dans le cas ou une personne arrive en cours de route 
            stock += data;
            console.log(stock);
            io.emit('message',data)
        })
    
});

    app.get('/', (req,res) =>{
        res.sendFile(__dirname + '/views/index.html');
    });

// démarrage du serveur
http.listen(3000, () => {
    console.log('Server is up and running on http://locahost:3000/');
});

