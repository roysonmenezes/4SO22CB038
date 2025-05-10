
import './App.css';
import Button from '@mui/material/Button';


function StockPage() {
  return (
    <div className="App">
      
        <p>
          This is the Stock Price Aggregation Page
        </p>
        
      <Button onClick={getData}  variant="contained">Get Stock Details</Button>
    </div>
  );
}



  async function getData() {
    console.log("Fetching data from API...");
  const url = "http://20.244.56.144/evaluation-service/stocks";
  try {
    const response = await fetch(url,
        { method: "GET", headers: { "Content-Type": "application/json",
             "Bearer": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODY5MjE4LCJpYXQiOjE3NDY4Njg5MTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk4Mzc4OWQ1LTI3NDQtNGQ4OS04YTkwLTU3ZWIwMjBmMjBjNyIsInN1YiI6IjIyazM4LnJveXNvbkBzamVjLmFjLmluIn0sImVtYWlsIjoiMjJrMzgucm95c29uQHNqZWMuYWMuaW4iLCJuYW1lIjoicm95c29uIGtlbnV0ZSBtZW5lemVzIiwicm9sbE5vIjoiNHNvMjJjYjAzOCIsImFjY2Vzc0NvZGUiOiJLakpBeFAiLCJjbGllbnRJRCI6Ijk4Mzc4OWQ1LTI3NDQtNGQ4OS04YTkwLTU3ZWIwMjBmMjBjNyIsImNsaWVudFNlY3JldCI6ImZmYVNQVHhuZXZWQ2ZQWkEifQ.B5GAEi8xAqFvHxptjCB89W_8UrAcaZ_P8EiSX9ct47E" } }
    );
    // if (!response.ok) {
    //   throw new Error(`Response status: ${response.status}`);
    // }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

// custom function to call the API
  function callApi( url ){

  }

export default StockPage;
