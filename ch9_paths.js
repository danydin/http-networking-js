async function main() {
    async function getResources(path) {
        const fullURL = `https://api.boot.dev/${path}`
        const response = await fetch(fullURL, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': generateKey(),
            'Content-Type': 'application/json'
        }
        })
        const resources = await response.json()
        return resources
    }
    
    
    const locations = await getResources('/v1/courses_rest_api/learn-http/locations')
    console.log('Locations:')
    logResources(locations)
    console.log(' --- ')
    
    const items = await getResources('/v1/courses_rest_api/learn-http/items')
    console.log('Items:')
    logResources(items)
    console.log(' --- ')
    
    const users = await getResources('/v1/courses_rest_api/learn-http/users')
    console.log('Users:')
    logResources(users)
    
    function logResources(resources) {
        for (const resource of resources) {
        console.log(` - ${JSON.stringify(resource)}`)
        }
    }
    
    function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
    }

    console.log('////////////////////////////////')

    async function getUsers(url, apiKey) {
        const fullURL = `${url}?sort=level`
        const response = await fetch(fullURL, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-API-Key': apiKey
          }
        })
        return response.json()
      }
      
      
      const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
      
      const apiKey = generateKey()
      
      const users2 = await getUsers(baseURL, apiKey)
      for (const user of users2) {
        console.log(`got user with name: ${user.characterName}, and level: ${user.level}`)
      }
      
      function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
      }

      console.log('//////////////////////////////////////////////////////////////')

      async function lootTreasure(baseURL, chestRarity) {
        const rare = (chestRarity == "Common")?"1":(chestRarity == "Rare")?"3":"5";
        const queryParams = `?sort=quality&limit=${rare}`
        const fullURL = `${baseURL}${queryParams}`
        return await getItems(fullURL, apiKey2)
      }
      
      
      const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
      const apiKey2 = generateKey()
      
      const commonLoot = await lootTreasure(url, 'Common')
      console.log('Looting common treasure chest...')
      for (const item of commonLoot) {
        console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
      }
      console.log('---')
      
      const rareLoot = await lootTreasure(url, 'Rare')
      console.log('Looting rare treasure chest...')
      for (const item of rareLoot) {
        console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
      }
      console.log('---')
      
      console.log('Looting legendary treasure chest...')
      const legendaryLoot = await lootTreasure(url, 'Legendary')
      for (const item of legendaryLoot) {
        console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
      }
      
      async function getItems(url, apiKey2) {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-API-Key': apiKey2
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
      
      
}

main()