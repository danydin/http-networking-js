const main = async () => {
    async function getUsers(url, apiKey) {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            "X-API-Key": apiKey
          }
        })
        return response.json()
      }
      
      
      const generatedKey = generateKey()
      const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
      const users = await getUsers(url, generatedKey)
      logUsers(users)
      
      function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
      }
      
      function logUsers(users) {
        for (const user of users) {
          console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
        }
      }

      ////////////////////////////////////////////////////////////////////////

      console.log('post create user'
      )

      async function createUser(apiKey, url, data) {
        const response = await fetch(url, {
          method: 'POST',
          Mode: 'cors',
          headers: {
            "X-API-Key": apiKey,
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
        return response.json();
      }
      
      
      const userToCreate = {
        characterName: 'Grendel',
        class: 'Warrior',
        level: 1,
        pvpEnabled: false,
        user: {
          name: 'Allan',
          location: 'USA',
          age: 27
        }
      }
      
      const generatedKey1 = generateKey()
      const url1 = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
      
      async function getUsers(url, apiKey) {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-API-Key': apiKey
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
      
      function logUsers(users) {
        for (const user of users) {
          console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
        }
      }
      
      console.log('Retrieving user data...')
      const userDataFirst = await getUsers(url1, generatedKey1)
      logUsers(userDataFirst)
      console.log('---')
      
      console.log('Creating new character...')
      const creationResponse = await createUser(generatedKey1, url1, userToCreate)
      console.log(`Creation response body: ${JSON.stringify(creationResponse)}`)
      console.log('---')
      
      
      console.log('Retrieving user data...')
      const userDataSecond = await getUsers(url1, generatedKey1)
      logUsers(userDataSecond)
      console.log('---')
      
      ////////////////////
      console.log('status code')
      async function getUserCode(url, apiKey) {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-API-Key': apiKey
          }
        })
        return response.status
      }
      
      
      const generatedKey2 = generateKey()
      
      const invalidId = 'invalid-id'
      const codeFirst = await getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${invalidId}`, generatedKey2)
      console.log(`id: ${invalidId}, status code: ${codeFirst}`)
      
      const validId = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
      const codeSecond = await getUserCode(`https://api.boot.dev/v1/courses_rest_api/learn-http/users/${validId}`, generatedKey2)
      console.log(`id: ${validId}, status code: ${codeSecond}`)
      
      function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
      }
      
      ////////////////////////////////////////////////////////////////

      console.log('------- update & get method')
      
      async function updateUser(baseURL, id, data, apiKey) {
        const fullURL = `${baseURL}/${id}`
        const response = await fetch(fullURL, {
          mode: 'cors',
          method: 'PUT',
          headers: {
            "X-API-Key": apiKey,
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
        // console.log(response.json())
        return response.json()
      }
      
      async function getUserById(baseURL, id, apiKey) {
        const fullURL = `${baseURL}/${id}`
        const response = await fetch(fullURL, {
          method: 'GET',
          mode: 'cors',
          headers: {
            "X-API-Key": apiKey
          }
        })
        // console.log(response.json())
        return response.json()
      }
      
      
      const userId = '2f8282cb-e2f9-496f-b144-c0aa4ced56db'
      const generatedKey3 = generateKey()
      const baseURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
      
      function generateKey() {
        const characters = 'ABCDEF0123456789'
        let result = ''
        for (let i = 0; i < 16; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return result
      }
      
      function logUser(user) {
        console.log(`User uuid: ${user.id}, Character Name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, PVP Status: ${user.pvpEnabled}, User name: ${user.user.name}`)
      }
      
      const userData = await getUserById(baseURL, userId, generatedKey3)
      logUser(userData)
      
      console.log(`Updating user with id: ${userId}`)
      userData.characterName = 'Dellbiar'
      userData.level = 7
      userData.class = 'Warrior'
      userData.pvpEnabled = true
      userData.user.name = 'Allan'
      await updateUser(baseURL, userId, userData, generatedKey3)
      
      const newUser = await getUserById(baseURL, userId, generatedKey3)
      logUser(newUser)
      
      console.log('////////////////////////////////////////////////////////////////')

      async function deleteUser(baseURL, id, apiKey) {
        const fullURL = `${baseURL}/${id}`
        const response = await fetch(fullURL, {
          "method": "DELETE",
          "mode": "cors",
          headers: {
            "X-API-Key":apiKey
          }
        })
        return response.json()
      }
      
      
      const userId5 = '0194fdc2-fa2f-4cc0-81d3-ff12045b73c8'
      const generatedKey5 = generateKey()
      const url5 = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users'
      
      async function getUsers(url, apiKey) {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-API-Key': apiKey
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
      
      function logUsers(users) {
        console.log('Logging user records:')
        for (const user of users) {
          console.log(`User uuid: ${user.id}, Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`)
        }
      }
      
      const users5 = await getUsers(url5, generatedKey5)
      logUsers(users5)
      console.log('---')
      
      await deleteUser(url5, userId5, generatedKey5)
      console.log(`Deleted user with id: ${userId5}`)
      console.log('---')
      
      const newUsers = await getUsers(url5, generatedKey5)
      logUsers(newUsers)
      console.log('---')
      
}

main()