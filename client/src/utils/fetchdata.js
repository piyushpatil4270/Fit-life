export const exeerciseOptions={
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  params: {limit: '500'},
  headers: {
    'X-RapidAPI-Key': '39315176b8msh06ed59e28e589e7p111e04jsn49f7d47501c0',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData=async(url,options)=>{
 const response=await fetch(url,options)
 const data=response.json()
 return data;
}