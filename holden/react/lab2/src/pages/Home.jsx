import { useState, useGlobal } from "reactn"

const Home = () => {

  const [token, setToken] = useGlobal("token")

  return (
    <div class="main">
      <h1>Placeholder Name</h1>
      <h3>Who I am:</h3>
      <div class="">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales vulputate lectus vitae bibendum. In hac habitasse platea dictumst. In pulvinar nibh malesuada erat gravida vulputate. Cras id vehicula dolor. Cras nec bibendum odio, in facilisis dolor. Pellentesque tincidunt malesuada tempus. Proin scelerisque orci arcu. Quisque condimentum urna non tincidunt auctor.</p>
        <p>Aliquam tempor tellus eget erat vulputate, sit amet congue justo consectetur. Sed nibh urna, faucibus id ex eget, fringilla scelerisque turpis. Morbi mollis turpis nec eleifend venenatis. Etiam aliquet accumsan dictum. Donec massa elit, viverra et arcu in, aliquet tempor elit. Praesent sagittis est vel nisl pellentesque tempus. Suspendisse euismod bibendum ex sed condimentum. Ut ut lacinia massa, tempor sagittis nisl. Duis arcu enim, vulputate quis congue in, euismod sit amet nisi. Nulla ac tincidunt mi. Nulla ligula metus, mollis in porta ut, elementum non nisi. Pellentesque hendrerit justo eu risus faucibus, vel dapibus mi pellentesque.</p>
      </div>
      <img class="pic1" src="https://avatars.githubusercontent.com/u/22627990?v=4" alt="some koala (my profile picture on github)" title="I am definitely human, this picture just is from a bad angle"/>
      <div class="horizontal">
        <div>
          <h3>What I know:</h3>
          <ul>
            <li>Python</li>
            <li>Elephant</li>
            <li>Cougar</li>
            <li>Kitty</li>
          </ul>
        </div>
        <div>
          <h3>What I've done:</h3>
          <ul>
            <li>et leaves</li>
            <li>fallen out of tree</li>
            <li><a href="https://youtu.be/O0cAx1jLbJk">thrown tantrum</a></li>
          </ul>
        </div>
        <div>
          <h3>contact me:</h3>
          <ul>
            <li>through the grapevine</li>
            <li>by banana phone</li>
            <li><a href="/contact">through this form</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;