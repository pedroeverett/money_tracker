import React from 'react';

class TechCrunchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    this.NewsList();
  }

  NewsList() {
    fetch('https://newsapi.org/v1/articles?source=techcrunch&apiKey=0e1f3379a0344401a415b6bf48a73db9')
    .then(data => data.json())
    .then(data => {
      this.setState({
        news: data.articles
      });
    });
  }

  render() {
    const eachNew = this.state.news.map((item, index) => {
      return (
        <div key={index}>
        <img src={item.urlToImage} id="newsImg"/>
        <h4>{item.title}</h4>
        <p>Author: {item.author}</p>
        <p>{item.description}</p>
        </div>
        )
    });
    return (
      <div className="container">
      <h1>{this.props.name}</h1>
      <div className="article-list">{ eachNew }</div>
      </div>
      )
  }
}
export default TechCrunchList;