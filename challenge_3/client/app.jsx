
class App extends React.Component {
  
  constructor (props) {
    super (props);
    this.state = {
      userInfo:null,
      shippingInfo:null,
      paymentInfo:null,
      currentPlace: 0
    }
    
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick (input) {
    console.log(input);
    console.log(this.state.currentPlace);
    if (this.state.currentPlace === 4) this.postOrder ();
    if (this.state.currentPlace >= 1 && this.state.currentPlace <= 3) this.saveInput ();
    this.setState({
      currentPlace: (this.state.currentPlace + 1) % 5
    })
  }
  
  saveInput (input) {
    console.log('save input')
    if (this.currentPlace === 1) {
      this.setState({
        userInfo: input
      });
    }
    if (this.currentPlace === 2) {
      this.setState({
        shippingInfo: input
      });
    }
    if (this.currentPlace === 3) {
      this.setState({
        shippingInfo: input
      })
    }
  }
  
  postOrder() {
  //make post request
  console.log('Post order');
  }
  
  renderCurrentPlace (currentPlace) {
    if (currentPlace === 0) return <div><h1>Home</h1><button onClick={this.handleClick}>CHECKOUT</button></div>
    if (currentPlace === 1) return <F1 handleClick={this.handleClick}/>
    if (currentPlace === 2) return <F2 handleClick={this.handleClick}/>
    if (currentPlace === 3) return <F3 handleClick={this.handleClick}/>
    if (currentPlace === 4) return <Summary handleClick={this.handleClick}/>
  }
  
  
  
  render () {
    
    return (
      <div className="app">
        {this.renderCurrentPlace(this.state.currentPlace)}
      </div>  
    )  
  
  }
}


()=>{fund(3)}

class F1 extends React.Component {
  
  constructor(props) {
    super (props);
    this.state = {
      first: '', 
      last: '', 
      username: '',
      password: '',
      email: ''
    };
  }
  
  handleChange (e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit (e) {
    e.preventDefault();
    this.props.handleClick(this.state);
  }
  
  render () {
    return (
      <div>
        <h1>User Information</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="first" placeholder="First Name" value={this.state.first} onChange={this.handleChange.bind(this)} /><br></br>
          <input type="text" name="last" placeholder="Last Name" value={this.state.last} onChange={this.handleChange.bind(this)} /><br></br>
          <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange.bind(this)} /><br></br>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)} /><br></br>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} /><br></br>
          <input type="submit" value="NEXT" />
        </form>
      </div>
    )
  }
}

class F2 extends React.Component {
  
  constructor (props) {
    super (props);
    this.state = {
      formId: 2,
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipcode: ''
    }
    
    var stateInitials = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','GU','HI','IA','ID','IL','IN','KS','KY','LA','MA','ME','MD','MI','MN','MO','MS','MT','NC','NE','ND','NH','NJ','NM','NY','NV','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','WA','WI','WV','WY'];
    this.rows = stateInitials.map( (state, i) => {
      return <option key={i} value={state}>{state}</option>
    });
  }
  
  handleSubmit (e) {
    e.preventDefault();
    this.props.handleClick(this.state);
  }
  
  handleChange (e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
   
  render () {
    return (
      <div>
        <h1>Shipping Information</h1>
        <div className="form-container f2">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" name="addressLine1" placeholder="Address 1" value={this.state.addressLine1} onChange={this.handleChange.bind(this)}/><br></br>
            <input type="text" name="addressLine2" placeholder="Address 2" value={this.state.addressLine2} onChange={this.handleChange.bind(this)}/><br></br>
            <input type="text" name="city" placeholder="City" maxLength="30" value={this.state.city} onChange={this.handleChange.bind(this)}/><br></br>
            <select id="state" name="state" maxLength="2" value={this.state.state} onChange={this.handleChange.bind(this)}>{this.rows}</select><br></br>
            <input type="text" name="zipcode" placeholder="Zip" maxLength="5" value={this.state.zipcode} onChange={this.handleChange.bind(this)}/><br></br>
            <input type="submit" value="NEXT" />
          </form>
        </div>
      </div>
    );
  }
}

class F3 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      cardNum: '',
      expiry: '',
      cvv: '',
      zipcode: ''
    }
  }
  
  handleChange (e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit (e) {
    e.preventDefault();
    this.props.handleClick(this.state);
  }
  
  render () {
    return (
      <div>
      <h1>Payment Information</h1>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="cardNum" placeholder="Card Number" maxLength="16" value={this.state.cardNum} onChange={this.handleChange.bind(this)} /><br></br>
        <input type="month" name="expiry" placeholder="Expiry Date" value={this.state.expiry} onChange={this.handleChange.bind(this)} /><br></br>
        <input type="text" name="cvv" placeholder="CVV" maxLength="3" value={this.state.cvv} onChange={this.handleChange.bind(this)} /> <br></br>
        <input type="text" name="zipcode" placeholder="Zip" maxLength="5" value={this.state.zipcode} onChange={this.handleChange.bind(this)} /> <br></br>
        <input type="submit" value="NEXT" />
      </form>
      </div>
    )
  }
}

var Summary = (props) => {
  
  
  
  return (
    <div className="summary">
      <h1>Order Summary</h1>
      <div className="f1-review">F1-REVIEW
      </div>
      <div className="f2-review">F2-REVIEW
      </div>
      <div className="f3-review">F3-REVIEW
      </div>
      <button onClick={props.handleClick}>ORDER</button>
    </div>
  )
}


ReactDOM.render(<App></App>, document.getElementById('root'));

