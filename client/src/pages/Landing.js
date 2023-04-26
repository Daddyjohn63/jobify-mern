import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            I'm baby gentrify pickled dreamcatcher palo santo health goth
            post-ironic blog flexitarian squid godard locavore YOLO kitsch etsy
            seitan. Tilde ethical jawn authentic, roof party umami letterpress
            cardigan vinyl post-ironic microdosing slow-carb 3 wolf moon small
            batch. Enamel pin kombucha microdosing heirloom, leggings seitan
            edison bulb hashtag.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
