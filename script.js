// not so much empty
const API_URL = "https://jsonplaceholder.typicode.com/posts";
const fetchButton = document.getElementById("fetchButton");
const postList = document.getElementById("postList");
const error = document.getElementById("error");
const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");


async function handleFetchPost () {
    clearstatus ();
    fetchButton.displayed = true;
    setLoading (errorbox, true, "loading...");
    try {
        const res = await fetch (API_URL);
        if (!res.ok) throw new Error (`HTTP ${res.status}`);
        const json = await res.json ();
        renderposts(json);
    } catch (err) {
        showError (errorbox, `Failed ${err.message}`);
        postList.innerHTML = "";
    } finally {
        setLoading (errorbox, false);
        fetchButton.disabled = false;
    }
}
fetchButton.addEventListener("click", handleFetchPost);

