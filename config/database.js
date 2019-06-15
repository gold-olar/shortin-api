if(process.env.NODE_ENV  === 'production'){
	module.exports ={
		mongoURI:'mongodb://ptadmin:ptadmin99@ds145412.mlab.com:45412/private-trips2'
 
	}
}else{
		module.exports = {
		mongoURI :'mongodb://localhost:27017/shortin'
	}
}

