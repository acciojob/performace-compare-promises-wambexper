// Array of API URLs to fetch data from
const apiUrls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5",
    "https://jsonplaceholder.typicode.com/todos/6",
    "https://jsonplaceholder.typicode.com/todos/7",
    "https://jsonplaceholder.typicode.com/todos/8",
    "https://jsonplaceholder.typicode.com/todos/9",
    "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data from a single API
const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

// Function to measure time using Promise.all
const measureTimeAll = async () => {
    const startTime = performance.now();
    await Promise.all(apiUrls.map(url => fetchData(url)));
    const endTime = performance.now();
    return endTime - startTime;
};

// Function to measure time using Promise.any
const measureTimeAny = async () => {
    const startTime = performance.now();
    await Promise.any(apiUrls.map(url => fetchData(url).catch(error => error)));
    const endTime = performance.now();
    return endTime - startTime;
};

// Function to display results in the table
const displayResults = async () => {
    // Measure time for Promise.all
    const timeAll = await measureTimeAll();
    // Measure time for Promise.any
    const timeAny = await measureTimeAny();

    // Display results in the table
    document.getElementById('output-all').textContent = timeAll.toFixed(2);
    document.getElementById('output-any').textContent = timeAny.toFixed(2);
};

// Call the function to display results
displayResults();
