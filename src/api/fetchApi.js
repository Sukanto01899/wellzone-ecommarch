

const fetchApi = {};

fetchApi.get =async  (endPoint)=>{
     const res = await fetch(`http://localhost:5000/api/${endPoint}`);
     const data = res.json();
     return data;
}
fetchApi.post =async (endPoint, body)=>{
     const res =await fetch(`http://localhost:5000/api/${endPoint}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    return data;
}


export default fetchApi;