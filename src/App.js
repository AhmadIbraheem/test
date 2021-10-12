import Ads from './component/home/Ads/Ads';
import DownloadApp from './component/home/DownloadApp/DownloadApp';
import Intro from './component/home/Intro/Intro';
import WhyLB from './component/home/WhyLB/WhyLB';
import Topbar from './component/topbar/Topbar';
import './App.css';
import Home from './component/home/Home';
import Login2 from './component/Logging2/Login/Login2'
import Levels2 from './component/Levels/Level2/Levels2';
import Progress from './component/Quizes/progress/Progress';
import Form1 from './component/Quizes/Form1/Form1';
import QuizFooter from './component/Quizes/quizeFooter/QuizFooter';
import QuizeQuestion from './component/Quizes/quizeQuestion/QuizeQuestion';
import CorrectAnswer from './component/Quizes/correctAnswer/CorrectAnswer';
import WrongAnswer from './component/Quizes/wrongAnswer/WrongAnswer';
import LevelInfo from './component/Levels/levelInfo/LevelInfo';
import LevelDemo from './component/Levels/LevelDemo/LevelDemo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Question1 from './component/Quizes/questions/question1/Question1';
import QuestionAudio from './component/Quizes/questions/questioAudio/QuestionAudio';
import HomeMain from './component/home/HomeMain/HomeMain';
import Signup from './component/Logging/Signup/Signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomeMain} />
        <Route path="/levels" component={LevelDemo} />
        <Route path="/form" component={Form1} />
        <Route path="/question1" component={Question1} />
        <Route path="/question2" component={QuestionAudio} />
        <Route path="/question3" component={QuizeQuestion} />
        <Route path="/signup" component={Signup} />

      </Router>


      {/* <Topbar />
      <Intro />
      <WhyLB />
      <Ads />

      <DownloadApp /> */}
      {/* <QuizeQuestion /> */}
      {/* <Form1 /> */}
      {/* <CorrectAnswer /> */}
      {/* <WrongAnswer /> */}
      {/* <LevelDemo /> */}
    </div>
  );
}

export default App;
