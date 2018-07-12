
class App extends React.Component {
  
  constructor (props) {
    super (props);
    this.state = {
      user:null,
      shipping:null,
      payment:null,
      currentPlace: 0
    }
    
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick (input) {
    if (this.state.currentPlace === 4) this.postOrder (this.state);
    if (this.state.currentPlace >= 1 && this.state.currentPlace <= 3) this.saveInput (input);
    this.setState({
      currentPlace: (this.state.currentPlace + 1) % 5
    })
  }
  
  saveInput (input) {
    if (this.state.currentPlace === 1) {
      this.setState({
        user: input
      });
    }
    if (this.state.currentPlace === 2) {
      this.setState({
        shipping: input
      });
    }
    if (this.state.currentPlace === 3) {
      this.setState({
        payment: input
      })
    }
  }
  
  postOrder(input) {
    var options = {
      method: "POST",
      body: JSON.stringify(input)
    }
    
    fetch('http://127.0.0.1:3000', options)
    .then(response => console.log (response))
    .catch(err => console.log ("Post failed"));
    
    console.log("posted with ", options);

  }
  
  renderCurrentPlace (currentPlace) {
    if (currentPlace === 0) return <div><h1>Home</h1><button onClick={this.handleClick}>CHECKOUT</button></div>
    if (currentPlace === 1) return <F1 handleClick={this.handleClick}/>
    if (currentPlace === 2) return <F2 handleClick={this.handleClick}/>
    if (currentPlace === 3) return <F3 handleClick={this.handleClick}/>
    if (currentPlace === 4) return <Summary handleClick={this.handleClick} orderInfo={this.state}/>
  }
  
  render () {
    
    return (
      <div className="app">
        {this.renderCurrentPlace(this.state.currentPlace)}
      </div>  
    )  
  
  }
}


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
  var user = props.orderInfo.user;
  var shipping = props.orderInfo.shipping;
  var payment = props.orderInfo.payment;
    
  return (
    <div className="summary">
      <h1>Order Summary</h1>
      <div className="user-info-review">
        <h3>User Information:</h3>
        <p>{user.first} {user.last}</p> 
        <p>Email: {user.email}</p>
      </div><br></br>
      <div className="shipping-info-review">
        <h3>Ship to:</h3>
        <p>{shipping.addressLine1}</p> 
        <p>{shipping.addressLine2}</p> 
        <p>{shipping.city} {shipping.state} {shipping.zipcode}</p>
      </div><br></br>
      <div className="payment-info-review">
        <h3>Payment Details:</h3>
        <p>Card ending in **** {payment.cardNum.slice(12)}</p>
      </div><br></br>
      <button onClick={props.handleClick}>ORDER</button>
    </div>
  )
}


ReactDOM.render(<App></App>, document.getElementById('root'));

