async function main () {
    async function getLocations() {
        const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations'
        const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
        })
        return await response.json()
    }

    
    const apiKey = generateKey()
    const locations = await getLocations()

    console.log('Got some locations from the server.')

    for (const location of locations) {
        console.log(`- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`)
    }
    
    function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
    }
    //////////////

    async function updateLocationById(id, locationObj) {
        const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`
        const response = await fetch(path, {
          method: 'PUT',
          mode: 'cors',
          headers: getHeaders(),
          body: JSON.stringify(locationObj)
        })
        return response.json()
      }
      
      
      const apiKey1 = generateKey()
      const locationID = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
      
      const location = await getLocationById(locationID)
      console.log(`Location '${location.name}' fetched. Data: ${JSON.stringify(location)}`)
      
      location.discovered = true
      await updateLocationById(locationID, location)
      console.log(`Location '${location.name}' was discovered!`)
      
      const updatedLocation = await getLocationById(locationID)
      console.log(`Location '${updatedLocation.name}' fetched. Data: ${JSON.stringify(updatedLocation)}`)
      
      function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
      }
      
      async function getLocationById(id) {
        const path = `https://api.boot.dev/v1/courses_rest_api/learn-http/locations/${id}`
        const response = await fetch(path, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-API-Key': apiKey1,
            'Content-Type': 'application/json'
          }
        })
        return response.json()
      }
      
      function getHeaders() {
        return {
          'X-API-Key': apiKey1,
          'Content-Type': 'application/json'
        }
      }
    //////////////////      

    function parseLocation(locationString) {
        try{
            const locationStr = JSON.parse(locationString)
            printLocationObj(locationStr)
        } catch(e){
            console.log(`invalid json string ${e.message}`)
        }
    }
      
      function printLocationObj(parsed) {
          console.log(`id: ${parsed.id}`)
          console.log(`discovered: ${parsed.discovered}`)
          console.log(`name: ${parsed.name}`)
          console.log(`recommendedLevel: ${parsed.recommendedLevel}`)
        }
        
        parseLocation(`
        {
            "discovered": false,
            "id": "0194fdc2-fa2f-4cc0-81d3-ff12045b73c8",
            "name": "Bandit Camp",
            "recommendedLevel": 14
        }
        `)
        
        console.log('---')
        
        parseLocation(`
        {
          "discovered":false,
          "id":"2f8282cb-e2f9-496f-b144-c0aa4ced56db",
          "name":"Irondeep",
          "recommendedLevel":6
        }
        `)

        /////////

}

main()