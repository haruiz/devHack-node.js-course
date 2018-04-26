export default{
    documentationPath: "/",
    basePath: "/api/",
    info:{
        title : "Devhack API",
        description: "Devhack Node.js Course",
        version: "1.0.0",
        contact: {
            name: "Henry Ruiz",
            email: "henry.ruiz@devhack.com"
        }
    },
    securityDefinitions: {
        'jwt': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header'
        }
    },
    grouping: "tags",
    sortEndpoints: "ordered"

}