if(process.env.NODE_ENV  === 'production'){
	module.exports ={
		mongoURI:'mongodb://shorttin_admin:shortin123@ds137857.mlab.com:37857/shorttin-db'
 
	}
}else{
		module.exports = {
		mongoURI :'mongodb://localhost:27017/shortin'
	}
}

