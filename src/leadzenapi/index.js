export const getInfo= async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users",{method:"GET",
  });
  return await response.json();
  }