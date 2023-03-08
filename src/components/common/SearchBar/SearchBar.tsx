import { InputGroup, FormControl } from "react-bootstrap";
import "./SearchBar.css";

export const SearchBar = (props: any) => {
  const handleChangeSearchBar = (e: any) => {
    props.setSearch(e.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search"
        className="search-bar"
        aria-describedby="basic-addon2"
        onChange={handleChangeSearchBar}
      />
    </InputGroup>
  );
};
