let googleUsers = [
    {userName: 'Moshe',id: 1},
    {userName: 'Avi',id: 2}
]
function callGoogleUsers(userIdInput,callback1,callback2) {
    let success = false;
    googleUsers.forEach((user)=>{
        if (user.id == userIdInput) {
            success = true;
        }
    });
    if (success == true) {
        callback1(userIdInput);
    } else {
        callback2(userIdInput);
    }
}
function onSuccess(userId) {
    let successMassage = `The use information for ${userId} has been retrieved`;
    console.log(successMassage);
}
function onFailure(userId) {
    let failureMessage = `The use information for ${userId} has not been retrieved`;
    console.log(failureMessage);
}
callGoogleUsers(2,onSuccess,onFailure);
