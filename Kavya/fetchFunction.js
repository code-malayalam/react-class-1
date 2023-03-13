export function getData() {
  return fetch(
    "https://raw.githubusercontent.com/kavyaks11/Training-Oct/main/etsy/object.json"
  ).then((response) => response.json());
}
