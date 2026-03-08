import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  // Store mount time as instance property (never changes → no drift)
  mountTime = Date.now();

  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Hassani Khadidja",
        bio: "Full-stack developer | React & Node.js enthusiast | Learning every day",
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/041/880/211/small_2x/ai-generated-a-minimalist-shot-of-a-vibrant-flower-field-with-colorful-blooms-stretching-to-the-horizon-free-photo.jpeg",
        profession: "Web Developer & Student"
      },
      shows: false,
      secondsSinceMount: 0
    };

    // Bind toggle method
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - this.mountTime) / 1000);
      this.setState({ secondsSinceMount: seconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, secondsSinceMount } = this.state;

    return (
      <div className="container my-5 text-center">
        <h1 className="mb-4">Checkpoint – Class Component + State</h1>

        <button
          className={`btn btn-lg mb-4 ${shows ? 'btn-danger' : 'btn-success'}`}
          onClick={this.toggleShow}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="card mx-auto" style={{ maxWidth: '500px' }}>
            <img
              src={person.imgSrc}
              className="card-img-top"
              alt={person.fullName}
            />
            <div className="card-body">
              <h2 className="card-title">{person.fullName}</h2>
              <h5 className="card-subtitle mb-3 text-muted">{person.profession}</h5>
              <p className="card-text">{person.bio}</p>
            </div>
          </div>
        )}

        <div className="mt-5 text-muted">
          <small>
            Component mounted since: <strong>{secondsSinceMount} seconds ago</strong>
          </small>
        </div>
      </div>
    );
  }
}

export default App;
