document.addEventListener("DOMContentLoaded", () => {
    //store constant url for form dom element; request url
const requestUrl = "https://randomuser.me/api/?results="
let inputForm = document.querySelector("form")
let peopleList = document.querySelector("#peopleList")
let peopleRes = []


// REQUEST DATA
    //take form element and prevent default behavior   (e)= the event that were listening for, allows you to manipuate default behavior
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault()
        //console.log(input.value)
        //get user inputed number
        let userInput = input.value

        //make fetch request to const api url with given user number
        fetch(requestUrl + userInput)
            //.then --> take response data and format
            .then((res) => {
                return res.json() //        console.log("response came back!")
            })
            //.then --> use response JSON data
            .then((jsonData) => {
                peopleRes =  jsonData.results      
                //console.log(peopleRes)
                domPeopleList(peopleRes)
                // person.innerHTML(peopleRes)
                // peopleRes.appendChild(person)

            })
            //.catch --> catch errors
            .catch((err) => {
                console.log(err)
                return err
            })
    })


//RESPONSE DATA
    //collect formatted data
function domPeopleList(resArr) {
    resArr.forEach((person) => {
        console.log(person, "👾")
        //create an li element for each response 
        let li = document.createElement("li")
        li.innerHTML = "<img src='"+ person.picture.medium + "' >"+ " " + person.name.first + " " +person.name.last //        console.log(person.name.first)
        // add li element to DOM
        peopleList.appendChild(li)
    }) 
}

})