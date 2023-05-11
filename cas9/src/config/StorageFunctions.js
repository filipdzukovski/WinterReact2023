export const getUser = () => {
    const user = localStorage.getItem("user");
    if(user !== "undefined") return JSON.parse(user); //za zemanje na najaven korisnik
    else return "";
}

export const getToken = () => {
    return localStorage.getItem("token") //dali imame token
}

export const setUser = (token,user) => {
    localStorage.setItem("token",token);
    localStorage.setItem("user",user) //po login
}

export const removeUser = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
}