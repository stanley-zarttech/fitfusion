const map = new Map();
const map1 = {};

map.set("username", "map value");
map.set("password", "map value 1");
console.log("password value", map.get("password"));
map1["key"] = "value for the key";

map.forEach((v, k, m) => {
  console.log("value: ", v);
  console.log("key: ", k);
  console.log("map: ", m);
});
console.log("has password: ", map.has("password"));
console.log("has email: ", map.has("email"));
const entries = map.entries();

console.log("map entry: ", entries);

console.log("map: ", map);
console.log("map1 ", map1);
const numbers = [1, 1, 1, 2, 3, 4, 4, 5, 3, 5, 3];
console.log("numbers: ", numbers);
const set = new Set([...numbers]);
console.log("set of numberrs: ", set.values());
console.log("has keys: ", set.has("welcome"));

// Async/Await

const login = async (username, password) => username + " " + password;

(async () => {
  login("john", "pwd")
    .then((res) => console.log("login result: ", res))
    .catch((error) => console.log("Error: ", error));
  const loginResult = await login("john", "pwd");
})();
