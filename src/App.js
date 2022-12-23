import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Resources } from './components/Resources';
import { resources } from './data/resources';

function App() {
  // takes the data imported as an object and creates an array
  // in the array, each element is an object containing all the 
  // resources and router-dom information needed to
  // generate the neccesary pages
  const resourcesArray = Object.values(resources);

  // this bit extracts the information needed for the navbar
  // as an array of objects
  const pagesArray = resourcesArray.map((category) => {
    return {title: category.title, path: category.path}
  });
  
  return (
      <div className="App">
        <h1>Maths Planning Site</h1>
        <NavBar pages={pagesArray}/>
        <Routes>
          <Route path="/" />
          {resourcesArray.map((category) => {
              return (<Route 
                path={category.path}
                element={
                  <Resources 
                    resourceTitle={category.title}
                    resources={category.resources}
                  />}
                />)
            })
          }
        </Routes>
      </div>
  );
}

export default App;
