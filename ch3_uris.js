// NOT ALL SCHEMES REQUIRE A "//"
// The "http" in a URL is always followed by ://. All URLs have the colon, but the // part is only included for schemes that have an authority component. As you can see above, the mailto scheme doesn't use an authority component, so it doesn't need the slashes.

async function main() {

    function printURLParts(urlString) {
        const urlObj = new URL(urlString)
        console.log(urlObj)
    }
        
    const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
    printURLParts(fantasyQuestURL)
  
    //////////////////////////

    function getMailtoLinkForEmail(email) {
        return `mailto:${email}`
    }
        
    let email = 'slayer@fquest.app'
    console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)
    email = 'killer@fquest.app'
    console.log(`The mailto link for ${email} is: ${getMailtoLinkForEmail(email)}`)

    ////////////////////////

    const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'

    const apiKey = generateKey()
    const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
    }
    })

    const responseData = await response.json()

    logLocations(responseData)

    function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++){
            result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
        }

    function logLocations(locations) {
    for (const location of locations) {
        console.log(`Location: ${location.name}, Recommended Character Level: ${location.recommendedLevel}`)
        } 
    }   
    ////////////


}

main()