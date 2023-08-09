import React from "react";
import { NavLink } from "react-router-dom";
import { List, Button, Input, ListItem, ListItemText } from "@material-ui/core";
import "./Header.css";
import bookService from "../service/book.service";
import { useAuthContext } from "../contexts/auth";

export default function Header() {
  const authContext = useAuthContext();
  const [value, setValue] = React.useState("");
  let [bookList, setBookList] = React.useState([]);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showList, setShowList] = React.useState(false);

  const SearchBar = (
    <Input
      name="search"
      label="First Name"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{
        marginInline: 30,
        width: 400,
        backgroundColor: "white",
        position: "absolute",
        right: 25,
        top: 8,
        paddingInline: 10,
        zIndex: 110,
      }}
    />
  );

  const toogleSearch = () => {
    setShowSearch((prev) => !prev);
    setBookList([]);
    setValue("");
    setShowList(false);
  };
  const onSearch = async () => {
    if (!showSearch) {
      toogleSearch();
      return;
    }
    console.log("searching....");
    const res = await bookService.searchBook(value);
    setBookList(res);
    setShowList(true);
    console.log("BOOKLIST ", bookList);
  };


  return (
    <>
      <div className="header">
        {authContext.user.id!=0 && (
          <>
            <NavLink to="/">HOME 🏠</NavLink>
            <NavLink to="/product">View Book</NavLink>
            <NavLink to="/add-book">Add Book</NavLink>
            <NavLink to="/bookList">Book List</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/update-profile">Update Profile</NavLink>
            <Button onClick={()=>authContext.signOut()}>LogOut</Button>
          </>
        )}
  
        {!authContext.user.id && <NavLink to="/register">Register</NavLink>}
        {!authContext.user.id && <NavLink to="/login">Login</NavLink>}

        <div className="search" onClick={onSearch}>
          🔎
        </div>
      </div>
      {showSearch && SearchBar}
      {showSearch && <div className="overlay" onClick={toogleSearch}></div>}
      {showSearch && showList && (
        <List
          style={{
            zIndex: 120,
            width: 400,
            position: "absolute",
            right: 55,
            backgroundColor: "rgb(255,255,255,0.3)",
            paddingInline: 10,
            maxHeight: 280,
            overflowY: "scroll",
          }}
        >
          {bookList.length === 0 && <ListItem>No Book Found</ListItem>}
          {bookList.map((book) => {
            console.log(book);
            return (
              <ListItem
                key={book.id}
                style={{
                  boxShadow: "1px 1px 1px grey",
                  backgroundColor: "rgba(128, 128, 128, 0.17)",
                  borderRadius: 10,
                  marginBlock: 10,
                }}
              >
                <ListItemText
                  primary={book.name}
                  secondary={book.category}
                  primaryTypographyProps={{ color: "primary" }}
                  secondaryTypographyProps={{ color: "secondary" }}
                />
                <Button variant="contained" color="secondary">
                  Add to Cart
                </Button>
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
}