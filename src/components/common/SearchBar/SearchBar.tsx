import { InputGroup, FormControl } from "react-bootstrap";
import "./SearchBar.css";

export const SearchBar = (props: any) => {
  const handleChangeSearchBar = (e: any) => {
    props.setSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <FormControl
        className="search-bar"
        placeholder="Search..."
        onChange={handleChangeSearchBar}
        value={props.search}
      />
    </div>
  );
};
