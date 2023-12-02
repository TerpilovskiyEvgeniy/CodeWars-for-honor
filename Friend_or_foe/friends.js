const  friend = (friends) => {
    const res = [];
        for (let i = 0; i < friends.length; i++){
            if (friends[i].length === 4){
                res.push(friends[i]);
            }
        }
    return res;
}
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))