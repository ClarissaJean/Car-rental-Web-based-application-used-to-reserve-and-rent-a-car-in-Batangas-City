




Frontend:
	Ionic Angular

Backend:
	Firebase [https://console.firebase.google.com/]
	Why firebase?
		It is under Google
		Easy to integrate to you application
		Reliable Databases
		Fast Workflow 
		Ready to user services
		All-in-one platform
		Free
Features:
	User Registration
	Users Authentication
	Update Data
	Post Data
	Delete Data
	Counts data
	User friendly
	Modern UI
	API Integration
	Handle Errors

Services Used:
	Firebase Firestore (NoSQL Database)
	Firebase Authenthication (User authentication)
	Firebase Storage (Cloud storage)

Application Type:
	CRUD(Create, Read, Update, Delete)

DB Design:
	user=>{
		id
		email
		fullname
		location
		role
		uid
		username

		
	}
	posts=>{
		id
		bookerid
		carmodel
		cartype
		date
		description
		img
		location
		ownerid
		price
		status
		username
	
	}
	transaction=>{
		id
		bookerid
		bookername
		date
		hours
		ownerid
		postid
		price
		status

	}



	


References we used to build the app:
	https://www.youtube.com/watch?v=0qUaOBYlCbA&ab_channel=YourProgrammer   (Ionic Firebase Integration reference)
	https://firebase.google.com/docs (Firebase Docs)
	https://ionicframework.com/docs (ionic docs)
	https://ionicframework.com/docs/components (ionic components)

