class App extends React.Component {
  render() {
    return <div>
      <Animation></Animation>
    </div>;
  }
}

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 30 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas angle={this.state.angle} />
  }
}

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.saveContext = this.saveContext.bind(this);
  }

  saveContext(ctx) {
    this.ctx = ctx;
  }

  componentDidUpdate() {
    const { angle } = this.props;
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.translate(width / 2, height / 2);
    this.ctx.rotate(angle * Math.PI / 180);
    this.ctx.fillStyle = '#4397AC';
    this.ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    this.ctx.restore();
  }

  render() {
    return <PureCanvas contextRef={this.saveContext}></PureCanvas>;
  }
}

class PureCanvas extends React.Component {
  shouldComponentUpdate() { return false; }

  render() {
    return (
      <canvas width="300" height="300"
        ref={node => node ? this.props.contextRef(node.getContext('2d')) : null}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

const jello = { 
  "ip": "8.8.8.8", 
  "location": { 
    "country": "US", 
    "region": "California", 
    "city": "Mountain View", 
    "lat": 37.38605, 
    "lng": -122.08385, 
    "postalCode": "94035", 
    "timezone": "-08:00", 
    "geonameId": 5375480 }, 
  "domains": [
    "0--9.ru", 
    "000.lyxhwy.xyz", 
    "000180.top", 
    "00049ok.com", 
    "001998.com.he2.aqb.so"
    ], 
    "as": { 
      "asn": 15169, 
      "name": "Google LLC", 
      "route": "8.8.8.0\/24", 
      "domain": "https:\/\/about.google\/intl\/en\/", 
      "type": "Content" 
    }, 
    "isp": "Google LLC", 
    "proxy": { 
      "proxy": false, 
      "vpn": false, 
      "tor": false 
    } 
  }