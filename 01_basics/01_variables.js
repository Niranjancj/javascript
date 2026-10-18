const accountId = 134423
let accountEmail = "Sanama@google.com"
// var accountPassword = "12345"
/* Prefer not to use var because of block and functional scope issues. */
accountCity = "Jaipur"
let accountState
// accountId = 2 // not allowed
accountEmail = "Niru@google.com"
accountPassword = "98765"
accountCity = "Bengaluru"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
