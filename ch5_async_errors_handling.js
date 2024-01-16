async function main() {
    try {
        printCharacterStats(4)
        printCharacterStats('ten')
        printCharacterStats(10)
    } catch (e) {
        console.log(e.message)
    }

    function printCharacterStats(level) {
    if (isNaN(level)) {
        throw new Error('Parameter is not a number!')
    }
    console.log(`Your character is level ${level}!`)
    }

    ////////////////////////////////////////////////////////////////

    try{
        const leaderboard = await fetchLeaderBoard()
        console.log(leaderboard)
    }catch (e) {
        console.log(`Our servers are down, but we will be up and running soon ${e.message}`)
    }
    async function fetchLeaderBoard() {
    const response = await fetch('https://fantasyquest.servers')
    return response.json()
    }


}

main()