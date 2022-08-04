const addAsync = function (user1, user2) {
    new Promise((res, rej) => {
        if(typeof user1 && typeof user2 != undefined && typeof user1 && typeof user2 === "number") res("success");
        else rej("failure");
    }).then(res => console.log(res))
    .catch(error => console.log(error));
};

addAsync(50,90);
addAsync(56,"9");
addAsync("not2", "not2");
addAsync(); 