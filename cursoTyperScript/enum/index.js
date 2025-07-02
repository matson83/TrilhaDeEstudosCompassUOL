var role;
(function (role) {
    role[role["admin"] = 1] = "admin";
    role[role["user"] = 2] = "user";
})(role || (role = {}));
var Status;
(function (Status) {
    Status[Status["active"] = 1] = "active";
    Status[Status["inactive"] = 0] = "inactive";
})(Status || (Status = {}));
var pessoa = {
    nome: 'Matson',
    idade: 30,
    status: 1,
    cargo: 1
};
console.log(pessoa);
