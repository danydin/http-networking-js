async function main() {
    const craftingCompleteWait = 700
    const combiningMaterialsWait = 300
    const smeltingIronBarsWait = 100
    const shapingIronWait = 500

    // Don't touch below this line

    setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
    setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
    setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
    setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

    console.log('Firing up the forge...')

    await sleep(2500)
    function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
    }

    ////////////////////////////////////////////////////////////////

    const applyDamage1 = (damage, currentHP) => {
        const NEWHP = currentHP - damage
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(currentHP - damage <= 0){
                reject(`The player suffers ${damage} points of damage and has fallen unconscious.`)
            } else {
                resolve(`The player suffers ${damage} points of damage and has ${NEWHP} hit points remaining.`)
            }
          }, 1000)
        })
      }
            
      function runApplyDamageTest(damage, currentHP) {
        console.log(`Applying ${damage} damage to player with ${currentHP} HP...`)
        applyDamage1(damage, currentHP).then((message) => {
          console.log(`...applyDamage resolved with: ${message}`)
        }).catch((message) => {
          console.log(`...applyDamage rejected with: ${message}`)
        })
      }
      
      runApplyDamageTest(27, 50)
      await sleep(1100)
      runApplyDamageTest(50, 50)
      await sleep(1100)
      runApplyDamageTest(110, 100)
      await sleep(1100)
      
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
      }
      ////////////////////////////////////////////////////////////////
    
      const message = await applyDamage(25,50)      
      console.log(message)
      
      function applyDamage(damage, currentHP) {
        return new Promise((resolve) => {
          const newHP = currentHP - damage
          setTimeout(() => {
            resolve(`The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
          }, 1000)
        })
      }
    ////////////////////////////////////////////////////////////////
    
    async function getItemData() {
        const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', getSettings())
        return response.json()
      }
      
      
      const items = await getItemData()
      
      logItems(items)
      
      function getSettings() {
        return {
          method: 'GET',
          mode: 'cors',
          headers: {
            'X-API-Key': 'Testing',
            'Content-Type': 'application/json'
          }
        }
      }
      
      function logItems(items) {
        for (const item of items) {
          console.log(item.name)
        } 
      }
      

}

main()