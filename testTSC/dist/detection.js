"use strict";
function detectTypes(val) {
    if (typeof val == "string") {
        return val.toLowerCase();
    }
    return "number";
}
function provideId(id) {
    if (!id) {
        console.log("Id is not provided...!");
        return;
    }
    id.toLowerCase();
}
// # Note : Empty string case is missing here []
function printAll(strs) {
    if (strs) {
        if (typeof strs == "object") {
            for (const a in strs) {
                console.log(a);
            }
        }
        else {
            console.log(strs);
        }
    }
}
function isAdmin(account) {
    // return account.isAdmin
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
