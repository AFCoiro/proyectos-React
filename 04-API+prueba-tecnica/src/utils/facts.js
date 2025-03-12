const URL_FACTS = 'https://catfact.ninja/fact';

export const getRandomFact = async()=>{
    const res = await fetch(URL_FACTS)
    const data = await res.json()
    const {fact} = data
    return fact
}