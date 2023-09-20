
const getUrlParams = () => {
    if (process.client) {
        //http://localhost:3000/setProfile?mail=qqbb204@gmail.com&name=qq+bb

        //http://localhost:3000/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaG93ZXJ5dTE4QGdtYWlsLmNvbSIsIm1lbWJlckluZm8iOnsiaWQiOjI0LCJlbWFpbCI6InNob3dlcnl1MThAZ21haWwuY29tIiwicHdkIjoiMUQ2NkUwNUUzMjEzRjhERjRGQzY4QUY1RUVFMzA0MkYzMkNGMjMyNzFCNEIyOTY5ODU3QjM0MTczNEU2QTk1MTk4RjU2RDZEQUY1RjBGQjJCMzI5MjdGNUJCQzgxN0UyIiwicm9sZSI6IlJPTEVfVVNFUiIsIm5hbWUiOiJZdSBMaW4iLCJwaG9uZSI6bnVsbCwiYmlydGhkYXkiOm51bGwsIm9yZ2FuaXphdGlvbiI6bnVsbCwiZ3JhZGUiOm51bGwsInJlZ2lzdGlvblRpbWUiOjE2OTQ5MDg4MDAwMDAsInN0YXR1cyI6MCwibGFzdElwIjpudWxsLCJsYXN0TG9naW4iOjE2OTUwODYxOTQ4NTQsInZlcmlmaWNhdGlvbkNvZGUiOiI3OUMxRDkwNDg2OTVFNkQzMzUwQTQwNzU2N0ZFRDA5MTE1QzdGQzQzRTVBREExN0RENTRCM0ZBQTJDQTg0OEE4IiwiZ2VuZGVyIjpudWxsLCJjYXRlZ29yeSI6bnVsbH0sImlzcyI6InNlY3VyaXR5IiwiaWF0IjoxNjk1MDg2MTk0LCJhdWQiOiJzZWN1cml0eS1hbGwiLCJleHAiOjE2OTU2OTA5OTR9.a_f0o5wi5Ua5ZcpNpgtI4Wj5I_04WKhlVdnAGm2oTWw&email=showeryu18@gmail.com&role=[ROLE_USER]
        const currentUrl = window.location.href;
        const queryString = currentUrl.split('?')[1];
        const params = {};
        if (queryString) {
            const paramPairs = queryString.split('&');
            paramPairs.forEach((pair) => {
                const [key, value] = pair.split('=');
                params[key] = decodeURIComponent(value);
            });
        }else{
            return null
        }
        return params
    }
}


export const utilities = {
    getUrlParams: getUrlParams
}