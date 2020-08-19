import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (<div className = "content">
        <h2 id = "current-page" >Projects</h2>
        
        <h3><a href = "https://github.com/danielkwonwu/gulp">GULP</a></h3>
        <h4>Food Review Website with Geotag</h4>
        <p><b>Technology Used</b>: Express.js, React.js, Google Apis (Static Map, Geolocation)</p>
        <p>Food Review website with functions including star rating visualization, near-by restaurant listing, SCSS, and more. Co-authored with Zach Young.</p>

        <h3><a href = "http://danielkwon.net/portfolio/my-treasure-no-touchy.html">My Treasure No Touchy!</a></h3>
        <h4>A Magical Tower Defense Game</h4>
        <p><b>Technology Used</b>: Unity, C#</p>
        <p>A tower-defense game with a wizard as the main character. Co-authored with Eric Li, Sam Wait, and Pranav Jain.</p>

        <h3><a href = "https://github.com/danielkwonwu/k-means-uber-recommendation/blob/master/Uber%20Recommendation%20Report.pdf">k-Means Uber Recommendation</a></h3>
        <h4>Recommendation for Uber Vehicles’ Idle Location with Big Data Analysis</h4>
        <p><b>Technology Used</b>: Python, Spark, AWS E3</p>
        <p>In the anticipation of the age of self-driving vehicles for hire, we've developed a k-means recommendation algorithm for the idle car locations based on 4.5 million geolocation data points. More information can be found in the report. Co-authored with Jice Kunfeng Zheng and Rui Qiu.</p>
        
        <h3><a href = "http://danielkwon.net:3456/">SimpleChatroom</a></h3>
        <h4>Multi-Room Environment Chatroom</h4>
        <p><b>Technology Used</b>: Socket.io, Node.js</p>
        <p>Implementation of simple real-time chatroom with basic design and features.  Co-authored with Zach Young.</p>
        

        <h3><a href="https://github.com/khye99/user_alert">User_Alert Plugin</a></h3>
        <h4>WordPress Plugin to Manage User Data</h4>
        <p><b>Technology Used</b>: PHP, WordPress, JSON formatting</p>
        <p>A Wordpress plugin to crawl user data upon changes in user permission levels or via cron jobs and manual requests to a third-party URL. Data is sent in JSON format. Co-authored with Karen Ye.</p>
        

        <h3><a href= "http://danielkwon.net/~danielkwon/apptrac/">AppTrac</a></h3>
        <h4>Web App for Job Application Tracking</h4>
        <p><b>Technology Used</b>: PHP, MySQL, JavaScript</p>
        <p>Job App Tracker with implementation of posting and editing features.</p>
    </div>);
  }
}

export default App;
