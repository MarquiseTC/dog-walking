import { getWalkers} from "./database.js"
import {getWalkersCities } from "./database.js"
import {getCities } from "./database.js"

const walkers = getWalkers()

const findWalkerCitiesByWalker = (walkerId) =>{
    const allTheWalkerCities = getWalkersCities()

    const matchingWatcherCityObjects = []
    for(const walkerCityObject of allTheWalkerCities){
        if (walkerCityObject.walkerId === 
            parseInt(walkerId)){ 
                matchingWatcherCityObjects.push(walkerCityObject)
            }
    }

    return matchingWatcherCityObjects
}
    const assignedCityNamed = (objectsWeJustFound) => {

        const allTheCities = getCities()
    
        let cityString = ""
        for(const matchingObject of objectsWeJustFound){
            for(const singleCity of allTheCities){
                if(singleCity.id === matchingObject.cityId){
                    cityString += ` ${singleCity.name}`
                }
            }
        }
        return cityString
    }













document.addEventListener(
    "click",  
    (clickEvent) => {
       
        const itemClicked = clickEvent.target

        
        if (itemClicked.id.startsWith("walker")) {

           
            const [,walkerId] = itemClicked.id.split("--")

            
            for (const walkerObject of walkers) {

                
               
                if (walkerObject.id === parseInt(walkerId)) {
                  
                
                const matchingObjects = findWalkerCitiesByWalker(walkerId)

                const stringListOfCities = assignedCityNamed(matchingObjects)
       
                window.alert(`${walkerObject.name} services ${stringListOfCities}`)
                }
                    
            }

         }
     }
 )
                
                
    
        

    



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walkerObject of walkers) {
        walkerHTML += `<li id="walker--
        ${walkerObject.id}">${walkerObject.name}</li>`}
       


    walkerHTML += "</ul>"

    return walkerHTML




}


