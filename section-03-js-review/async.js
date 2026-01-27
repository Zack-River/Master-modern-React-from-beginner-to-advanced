// fetch old way
fetch("https://api.github.com/users/github")
    .then(response => response.json())
    .then(data => console.log(data));

// fetch new way
async function fetchUser() {
    const response = await fetch("https://api.github.com/users/github");
    const data = await response.json();
    console.log(data);
}
fetchUser();

// fetch new way with error handling
async function fetchUserWithErrorHandling() {
    try {
        const response = await fetch("https://api.github.com/users/github");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
fetchUserWithErrorHandling();
