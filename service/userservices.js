


const getTodos = (req, where)=>{
    return req.user.getTodos(where);

}


module.exports = {
    getTodos
}