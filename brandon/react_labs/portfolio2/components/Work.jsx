import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Work = (props) => {
  return(
    <>
      <h4>Positions I have held...</h4>
      <Tabs defaultActiveKey="lmt">
        <Tab className="innerTab" eventKey="lmt" title="LMT">
          <p>Yes plz normcore fingerstache readymade organic meh cronut DSA humblebrag four dollar toast kale chips YOLO. Master cleanse before they sold out four dollar toast, unicorn williamsburg whatever meggings hell of cloud bread. Shoreditch fam woke, paleo mlkshk ramps shaman gochujang sustainable cliche hammock you probably haven't heard of them church-key. Butcher freegan af drinking vinegar cloud bread. Artisan street art iPhone pitchfork skateboard jean shorts. Glossier yuccie messenger bag quinoa marfa pickled portland viral stumptown. Lumbersexual live-edge cold-pressed occupy cray you probably haven't heard of them crucifix.</p>
          <p>Fanny pack authentic marfa art party lumbersexual. Organic fam synth intelligentsia trust fund, food truck heirloom sriracha bespoke craft beer pork belly bicycle rights tote bag. Adaptogen cray fingerstache put a bird on it quinoa helvetica. Twee squid banh mi, hoodie poke tumblr hexagon roof party green juice vinyl health goth tilde. Next level microdosing photo booth, shabby chic bushwick mixtape ramps man bun flexitarian plaid adaptogen. Four dollar toast meggings before they sold out, bitters chambray selfies tumeric pitchfork yuccie.</p>
        </Tab>
        <Tab className="innerTab" eventKey="cabletech" title="Cable Tech">
          <p>Yr retro air plant cornhole austin kinfolk gentrify cold-pressed artisan polaroid gluten-free single-origin coffee live-edge four dollar toast. Kinfolk wayfarers waistcoat tacos pitchfork celiac, scenester wolf occupy lomo 90's listicle brunch four loko gluten-free. Four loko praxis microdosing gochujang, listicle bespoke tousled banjo green juice cold-pressed pork belly mixtape. Meggings cliche poutine celiac pour-over wayfarers praxis cloud bread blue bottle skateboard portland tattooed hell of fixie godard.</p>
          <p>Umami pabst tofu gochujang, hammock edison bulb keytar. Man braid austin cray vice chia. Tofu 3 wolf moon aesthetic pop-up enamel pin scenester mumblecore woke, man bun lumbersexual keytar godard live-edge authentic. 3 wolf moon brunch knausgaard blog food truck vegan.</p>
        </Tab>
        <Tab className="innerTab" eventKey="usn" title="Navy">
          <h5>US Navy - Machinists Mate - 2nd class</h5>
        </Tab>
        <Tab className="innerTab" eventKey="food" title="Food Service"></Tab>
        <Tab className="innerTab" eventKey="retail" title="Retail"></Tab>
      </Tabs>
    </>
  );
};    

export default Work;
