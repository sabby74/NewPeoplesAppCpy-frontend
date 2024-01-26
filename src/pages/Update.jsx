import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom"






const Update = () => {
  const people = useLoaderData();
  const [formData, setFormdata] = useState(people);


  const handleChange = (e) => {
    setFormdata(prevState => {
        return {...prevState,
            [e.target.name] : e.target.value
        }   
    })
};


  return (
    <div>
      <Form action={`/update/${people._id}`} method="post">
        <input
          type="input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter person's Name"
        />
        <input
          type="input"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter person's Image"
        />
        <input
          type="input"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter person's title"
        />
        <input className ="rounded-full p-2 bg-green-200" type="submit" value={`update ${people.name}`} />
      </Form>
    </div>
  );
};

export default Update;
