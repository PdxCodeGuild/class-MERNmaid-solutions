import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Education = (props) => {
  return(
    <>
      <h4>These are all of the schools I have attended.</h4>
      <Tabs defaultActiveKey="pdx">
            <Tab className="innerTab" eventKey="pdx" title="PDX Code Guild">
              <h5>Full Stack Web Development Bootcamp</h5>
              <p>Banh mi chartreuse bicycle rights kitsch, 8-bit ennui umami gluten-free normcore hoodie fanny pack vape tattooed. Edison bulb salvia bushwick meggings wayfarers sriracha woke man bun beard cardigan street art hoodie narwhal keffiyeh letterpress. Offal mixtape selfies, pok pok tonx taiyaki venmo helvetica kale chips church-key four loko synth enamel pin ethical +1. 3 wolf moon raw denim af williamsburg jianbing, echo park chia iPhone fam irony microdosing readymade fixie mlkshk plaid. Lyft tofu four loko, cold-pressed meh austin flannel subway tile tacos godard butcher literally aesthetic. Prism polaroid franzen taiyaki.</p>
              <p>Trust fund thundercats beard, palo santo small batch tofu authentic ethical vape glossier green juice pok pok. Street art prism photo booth meggings, freegan etsy iPhone drinking vinegar synth. Lyft listicle meditation hashtag coloring book. Pickled church-key everyday carry snackwave freegan VHS cred retro disrupt woke skateboard adaptogen hella bespoke wolf. Meh mumblecore mustache, literally chartreuse kombucha trust fund quinoa artisan hashtag. Tote bag photo booth mumblecore crucifix waistcoat blog.</p>
              <p>Next level adaptogen distillery irony, iPhone literally edison bulb austin microdosing celiac. XOXO tote bag man bun neutra austin master cleanse. Farm-to-table tofu ugh single-origin coffee meditation asymmetrical schlitz butcher wayfarers yes plz sustainable tote bag. Woke live-edge banh mi fam, wayfarers cold-pressed 90's tacos waistcoat cray pitchfork intelligentsia snackwave. Cornhole gentrify poutine, truffaut authentic DIY food truck distillery chia disrupt. Knausgaard praxis ethical sriracha pork belly pug dreamcatcher vexillologist prism ennui gentrify poutine unicorn jianbing. Irony street art pickled, taiyaki williamsburg meggings raclette butcher leggings keytar yr four loko quinoa portland everyday carry.</p>
            </Tab>
            <Tab className="innerTab" eventKey="codefellows" title="Code Fellows">
              <h5>Full Stack Web Development Bootcamp</h5>
              <p>Kale chips adaptogen lumbersexual woke readymade live-edge artisan affogato occupy aesthetic swag mixtape you probably haven't heard of them chia. Pinterest letterpress try-hard, before they sold out shaman tattooed quinoa post-ironic gochujang +1. Praxis truffaut waistcoat biodiesel typewriter activated charcoal lumbersexual hammock vegan jianbing beard small batch. 90's photo booth tbh 3 wolf moon snackwave gochujang.</p>
              <p>Vice gochujang trust fund praxis kombucha intelligentsia health goth wayfarers iPhone PBR&B offal. Readymade keffiyeh forage hoodie tacos cliche semiotics. Fam vape vegan hell of yuccie pitchfork air plant tbh VHS. Thundercats stumptown fanny pack yr flexitarian before they sold out, mixtape polaroid. Migas twee cray banjo. Glossier cray tofu irony food truck yuccie pitchfork. Hashtag VHS live-edge single-origin coffee.</p>
            </Tab>
            <Tab className="innerTab" eventKey="fsm" title="Fl School of Massage">
              <p>Skateboard narwhal church-key pinterest raclette, glossier cornhole lomo. Cray pitchfork air plant typewriter, vape jianbing tumblr DIY pork belly. Tattooed glossier ramps biodiesel. Lomo poutine fingerstache viral ennui bitters. Semiotics waistcoat quinoa direct trade, butcher edison bulb tofu synth humblebrag kinfolk gentrify mustache heirloom man braid. Woke migas scenester cornhole cray poutine bicycle rights everyday carry crucifix tousled chicharrones vape williamsburg. You probably haven't heard of them hella green juice flannel hoodie cold-pressed brunch woke.</p>
              <p>Tacos pabst vinyl copper mug, small batch DSA XOXO. Jianbing fam hell of fingerstache ennui. Pabst migas pinterest iPhone +1 salvia skateboard tacos, fam portland normcore plaid biodiesel aesthetic. Hexagon austin thundercats hot chicken, shoreditch VHS put a bird on it. Wolf palo santo disrupt kinfolk vaporware tbh poutine squid austin pop-up green juice bushwick whatever.</p>
              <p>Shabby chic banjo narwhal adaptogen farm-to-table polaroid. Yr tilde taxidermy, squid edison bulb trust fund 90's art party bicycle rights woke crucifix austin. Hella narwhal health goth actually swag lumbersexual hexagon flexitarian fanny pack. Ramps raw denim mustache messenger bag ethical portland. Glossier yes plz live-edge chambray pickled, edison bulb taiyaki mixtape shaman.</p>
            </Tab>
            <Tab className="innerTab" eventKey="nnptc" title="NNPTC">
              <h5>Naval Nuclear Power Training Command</h5>
            </Tab>
            <Tab className="innerTab" eventKey="erau" title="Embry Riddle">
              <h5>Aeronautical University</h5>
            </Tab>
            <Tab className="innerTab" eventKey="jhs" title="Jupiter High">
              <h5>Class of 2009</h5>
            </Tab>
            <Tab className="innerTab" eventKey="auto" title="Auto">
              <h5>Informal Learning</h5>
            </Tab>
        </Tabs>
    </>
  );
};    

export default Education;
