import React, { useState } from 'react';
import axios from "axios"
function CreatePage() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: null,
  });
const [vayo, setvayo] = useState(false);
  const handleChange = (e) => {
    const target = e.target;

    const key = target.name; // "name", "price", or "image"
const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
// this means, if its a file input, get the uploaded file, otherwise, get the value like normal

    // Update only that one key in the formData object
    setFormData({
      ...formData,
      [key]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data=new FormData();
    //yo mathi ko form data hamro usestate ko haina hai yo function ho which is made nei to handle form data
    // hamle use garnu parya ni feri file vayera ho hai, thena vane we could have just wrapped our formdata ko value inside a json and throw it to the backend
    data.append("name",formData.name)
    data.append('price',formData.price)
    if(formData.image)
    {
// yedi image halya vaye append han
      data.append('image',formData.image)
    }
try{
  const response=await axios.post("http://localhost:5000/products",data).then(setvayo(true))
console.log(response);

}
catch{
  console.log("couldnt")
}


    console.log("Submitted data:", formData);
    
   
  };

  return (
    <>
    {
      !vayo &&
      
      <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-8">
        Create New Product
      </h1>

      <form encType='multipart/form-data'
      onSubmit={handleSubmit}
      className="shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
        </div>

        <div>
          <label className="block mb-1">Price ($)</label>
          <input
            name="price"
            type="number"
            required
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter price"
            />
        </div>

        <div>
          <label className="block mb-1">Image</label>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded-md"
            />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-md transition duration-200"
          >
          Submit
        </button>
      </form>
    </div>
      
      
      }
{
  vayo &&
 <>
  <h1
    h1 className="text-3xl flex justify-center items-center h-130 font-bold text-blue-500 mb-8">

    Success!</h1>
<button onClick={()=>setvayo(false)} className='bg-red-400'>Create another One</button>

    </>
}

    </>

  );
}

        
export default CreatePage;
