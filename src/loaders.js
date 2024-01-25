const URL = "http://localhost:4040"


export const peopleLoader = async () => {
    const response = await fetch(URL + "/people")
    const people = await response.json()
    console.log(people);
    return people
  }