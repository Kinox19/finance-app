import Header from "./components/header/Header";
import PageLayout from "./layout/PageLayout";
import ConverterPage from "./pages/converterPage/ConverterPage";
import SearchBar from "./components/searchBar/SearchBar"

function App() {
  return (
    <div className="App">
      <Header/>
      <PageLayout>
        <SearchBar/>
        <ConverterPage/>
      </PageLayout>
    </div>
  );
}

export default App;
