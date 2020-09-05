async function CreateUser(user) {
    var req = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    }
    const resp = await fetch("http://samasecentro.com:777/users", req)
    return await resp.json()
}

export {CreateUser}