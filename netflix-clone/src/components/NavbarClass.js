import React, { Component } from 'react';
import "./Navbar.css";

class NavbarClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  } 
  
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.setState({show: true});
      } else   this.setState({show : false});

    });

    return () => {
      window.removeEventListener("scroll");
    };
  }


  render() {
    return (
      <div className = {`nav ${this.state.show && "nav_black"}`}> 
      <img
        className="nav_logo"
        // src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
        src="https://th.bing.com/th/id/R.7019a854d877f915be14071b6a2ed660?rik=QnOuOoW74ADZ8Q&riu=http%3a%2f%2fwww.zupimages.net%2fup%2f16%2f31%2fm3sd.png&ehk=KfnKfJYa7lYGKrytV9RsfKf7%2buM3qsH%2fPlrcejgwKsE%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />

      <img
        className="nav_icon"
        src="https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fangry-chicken-netflix-user-icon-5927959975f50.jpeg"
      />
    </div>
    );
  }
}


// function Navbar() {
//   const [show, handleShow] = useState(false);
  
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });

//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

//   return (
    
//   );
// }

export default NavbarClass;
