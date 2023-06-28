export async function fetchUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if(response.ok) {
        return  await response.json();
    }
    throw new Error("something unexpected happened");
}