
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // optional but nice
import './App.css'; // you can add styles here


class App extends Component {
  constructor(props) {
    super(props);

    // 1. Initialize state
    this.state = {
      person: {
        fullName: "Khadidja Khaoila",
        bio: "Full-stack developer | React & Node.js enthusiast | Learning every day",
        imgSrc: "https://tse2.mm.bing.net/th/id/OIP.OzrXma3tIPT0-Lom_gUUfwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        profession: "Web Developer & Student"
      },
      shows: false,               // controls visibility
      mountTime: Date.now(),      // when component mounted
      secondsSinceMount: 0        // will be updated every second
    };

    // Bind methods (important in class components)
    this.toggleShow = this.toggleShow.bind(this);
  }

  // 2. Toggle visibility
  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  // 3. Lifecycle: start timer when component mounts
  componentDidMount() {
    this.interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - this.state.mountTime) / 1000);
      this.setState({ secondsSinceMount: seconds });
    }, 1000);
  }

  // 4. Lifecycle: clean up timer when component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, secondsSinceMount } = this.state;

    return (
      <div className="container my-5 text-center">

        <h1 className="mb-4">Checkpoint – Class Component + State</h1>

        {/* Toggle button */}
        <button
          className={`btn btn-lg mb-4 ${shows ? 'btn-danger' : 'btn-success'}`}
          onClick={this.toggleShow}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Conditional rendering of profile */}
        {shows && (
          <div className="card mx-auto" style={{ maxWidth: '500px' }}>
            <img
              src={person.imgSrc}
              className="card-img-top"
              alt={person.fullName}
              style={{ height: '320px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h2 className="card-title">{person.fullName}</h2>
              <h5 className="card-subtitle mb-3 text-muted">{person.profession}</h5>
              <p className="card-text">{person.bio}</p>
            </div>
          </div>
        )}

        {/* Mount time counter */}
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