async function main() {
    async function fetchIPAddress(domain) {
        const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: {
            'accept': 'application/dns-json'
        }
        })
        const respObject = await resp.json()
    
        // console.log(respObject.Answer[0].data)
        return respObject.Answer[0].data

    }
    
    ////////////////////////////////
    
    const domain = 'api.boot.dev'
    const ipAddress = await fetchIPAddress(domain)
    console.log(ipAddress)
    if (!ipAddress) {
        console.log('something went wrong in fetchIPAddress')
    } else {
        console.log(`found IP address for domain ${domain}: ${ipAddress}`)
    }


    function getDomainNameFromURL(url) {
        const domainUrl = new URL(url)
        return domainUrl.hostname
    }
    
    const bootdevURL = 'https://boot.dev/learn/learn-python'
    const domainName = getDomainNameFromURL(bootdevURL)
    console.log(`The domain name for ${bootdevURL} is ${domainName}`)
    

   ///////////

    const bootdevAPIDomain = 'api.boot.dev'
    const apiKey = generateKey()
    const items = await getItemData(bootdevAPIDomain)

    logItems(items)

    async function getItemData(domain) {
    const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items`, {
        method: 'GET',
        mode: 'cors',
        headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
        }
    })
    return response.json()
    }

    function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
    }

    function logItems(items) {
    for (const item of items) {
        console.log(item.name)
    }
    }

}
main()