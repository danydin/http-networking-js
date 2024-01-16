async function main() {

    function printURLParts(urlString) {
        const urlObj = new URL(urlString)
        console.log(urlObj)
    }
    
    // don't touch below this line
    
    const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
    printURLParts(fantasyQuestURL)
  
    ///

    function getMailtoLinkForEmail(email) {
        
    }
        
    let email = 'slayer@fquest.app'
    console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
    email = 'killer@fquest.app'
    console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
    
}