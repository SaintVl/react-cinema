import React from "react";
import { List } from "../component/List_Movies";
import { Preloader } from "../component/Preloader";
import { Search } from "../component/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    list: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?i=tt0133093&apikey=${API_KEY}&s=marvel`)
      .then((responce) => responce.json())
      .then((data) => this.setState({ list: data.Search, loading: false }));
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?i=tt0133093&apikey=${API_KEY}f&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((responce) => responce.json())
      .then((data) => this.setState({ list: data.Search, loading: false }));
  };

  render() {
    const { list, loading } = this.state;

    return (
      <main className="content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <List list={list} />}
      </main>
    );
  }
}

export { Main };
