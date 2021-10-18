export default async function getDataFromAPI(){
    const res = await fetch('http://localhost:5000/tasks')
    return await res.json()
}
export async function getDataById(id){
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    return await res.json()
}
export async function postDataToAPI(data){
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(data)
    })
    return await res.json()
}
export async function delDataFromAPI(id){
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    return await res.json()
}
export async function putDataToAPI(id, updTask){
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(updTask)
    })
    return await res.json()
}