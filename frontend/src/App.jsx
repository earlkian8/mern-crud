import Navbar from './components/NavBar.jsx'

const App = () => {
  fetch("/api/products")
  .then(response => response.json())
  .then(data => {
    document.getElementById("content").innerHTML = "";
    data.data.forEach(product => {
      document.getElementById("content").innerHTML += `
        <tr className='border-collapse border-2 border-solid border-black'>
          <th className='border-collapse border-2 border-solid border-black px-30 py-5'>${product.name}</th>
          <th className='border-collapse border-2 border-solid border-black px-20 py-5'>${product.price}</th>
          <th className='border-collapse border-2 border-solid border-black px-20 py-5'>${product.image}</th>
        </tr>
      `;
    });
  })
  .catch(error => console.error(error));
  
  return (
    <>
      <Navbar/>
      <div className="w-full h-lvh flex items-center justify-center">
        <table className='border-collapse border-2 border-solid border-black'>
          <thead>
            <tr className='border-collapse border-2 border-solid border-black'>
              <th className='border-collapse border-2 border-solid border-black px-30 py-5'>Name</th>
              <th className='border-collapse border-2 border-solid border-black px-20 py-5'>Price</th>
              <th className='border-collapse border-2 border-solid border-black px-20 py-5'>Image</th>
            </tr>
          </thead>
          <tbody id='content'>
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App