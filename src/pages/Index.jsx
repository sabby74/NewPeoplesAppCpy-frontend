import { Link, useLoaderData,Form } from "react-router-dom"

function Index(props) {
  const people = useLoaderData()
  

  

  return(
    <div>
        <h2>Create a Person</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="person's name" />
        <input type="input" name="image" placeholder="person's picture" />
        <input type="input" name="title" placeholder="person's title" />
        <input type="submit" value="create person" />
      </Form>

   {people.map(person => (
     <div className="flex justify-center ">
    <div className="flex flex-column flex-wrap justify-center items-center bg-green-500 rounded-lg  m-8 p-4 w-96  ">
    <div className="flex flex-column flex-wrap justify-center items-center bg-green-300 rounded-lg  m-8 p-4 w-96  ">
    <div key={person._id} >
      <Link to={`/${person._id}`}>
        <h1 className="text-2xl hover:italic" >Person Name: {person.name}</h1>
      </Link >
      <img className="w-40 h-400 rounded-md m-8" src={person.image} alt={person.name} />
      <h2>Title: {person.title}</h2>
    </div>
    </div>
    </div>
    </div>
  ))}
  </div>
  )}

export default Index