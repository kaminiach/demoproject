let creds = {

        // workspace:"convauto",
        // username:"decodestg@mailinator.com",
        // password:"Kitty@123",
        // filepathh:"test/videoData/"

        // workspace:"qatest",
        // username:"naga.arjun@entropiktech.com",
        // password:"TAta@54321",
        // filepathh:"test/videoData/"

        // workspace:"Translateissue",
        // username:"translateissue@yopmail.com",
        // password:"Ohmygod@321",
  
        workspace:"tenantoneqa",
        username:"nodapag910@vaband.com",
        password:"Viji@123",
        demoWorkspace:"Qademo"

        // workspace:"karthikaqa",
        // username:"karthikaqa@yopmail.com",
        // password:"Karthika@123",

        // workspace:"Indiamigration",
        // username:"indiamigration@yopmail.com",
        // password:"Indiamigration@123",

}
if (process.env.USE_STAG === 'true')
{
    creds = {

        // workspace:"Convauto",
        // username:"decodestg@mailinator.com",
        // password:"Kitty@123"

        // workspace:"Stagingq",
        // username:"staging@mailinator.com",
        // password:"Test@123",


        workspace:"Kaminidecode",
        username:"kamini@mailinator.com",
        password:"Test@123",
        demoWorkspace:"Stgdemo"

        // workspace:"karthikaqa",
        // username:"karthikaqa@yopmail.com",
        // password:"Karthika@123",

        // workspace:"Translateissue",
        // username:"translateissue@yopmail.com",
        // password:"Ohmygod@321",
    
    }
    
}
else if (process.env.USE_PROD ==='true')
{
    creds = {

        // workspace:"Qatest",
        // username:"naga.arjun@entropiktech.com",
        // password:"TAta@54321"

        workspace:"Translateissue",
        username:"translateissue@yopmail.com",
        password:"Ohmygod@321",
        demoWorkspace:"Demo"

        // workspace:"uiautomation",
        // username:"uiautomation@mailinator.com",
        // password:"Test@1234",
        
       
        
    }

 }

module.exports = creds
