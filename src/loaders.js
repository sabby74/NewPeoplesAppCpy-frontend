const URL = "https://newpeoplesappcpy.onrender.com";

export const peopleLoader = async () => {
  const response = await fetch(URL + "/people");
  const people = await response.json();
  console.log(people);
  return people;
};

export const showLoader = async ({ params }) => {
  console.log(params, "showLoader");
  const res = await fetch(URL + "/people/" + params.id);
  const people = await res.json();
  return people;
};
