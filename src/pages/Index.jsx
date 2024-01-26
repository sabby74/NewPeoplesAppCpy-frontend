import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  const people = useLoaderData();

  return (
    <div>
      <div className="flex flex-wrap  justify-center items-center bg-orange-700 rounded-lg  m-8 p-4 h-40   ">
        <h2 className=" hover:italic text-bold text-blue-900 text-3xl">
          Create a Person
        </h2>
        <Form action="/create" method="post">
          <input className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="text" name="name" placeholder="person's name" />
          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="text" name="image" placeholder="person's picture" />
          <input className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" type="text" name="title" placeholder="person's title" />
          <input type="submit" value="create person" />
        </Form>
      </div>


      <div className="flex flex-column flex-wrap justify-center items-center bg-green-900 rounded-lg  m-24 p-4   ">
        {people.map((person) => (
          <div className="flex justify-center ">
            <div className="flex flex-column flex-wrap justify-center items-center bg-green-500 rounded-lg  m-8 p-4 w-96  ">
              <div className="flex flex-column flex-wrap justify-center items-center bg-green-300 rounded-lg  m-8 p-4 w-96  ">
                <div key={person._id}>
                  <Link to={`/${person._id}`}>
                    <h1 className=" text-bold text-2xl hover:italic text-green-800">
                      Person Name: {person.name}
                    </h1>
                  </Link>
                  <img
                    className="w-40 h-400 rounded-md m-8"
                    src={person.image}
                    alt={person.name}
                  />
                  <h2>Title: {person.title}</h2>

                  <Link to={`/${person._id}/edit`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>
                  </Link>
                  <form action={`/${person._id}?_method=DELETE`} method="post">
                    <input
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      value="Delete"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
