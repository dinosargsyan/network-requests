const genericfunc = (url, method="GET", body=null)=>{
    return fetch(url,{
        method:method,
        body:body ? JSON.stringify(body) : null,
        headers: body ? {
            'Content-Type':'application/json'
        } : null
    } )
    .then(res=>res.JSON())
}