
class App extends React.Component {
  
  constructor (props) {
    super (props);
    this.state = {
      
    }
  }
  
  render () {
    return (
      <div className="app">
        <h1>HOME</h1>
        <button className="checkout-button">CHECKOUT</button>
        <F1 />
        <F2 />
        <F3 />
      </div>  
    )  
  
  }
}

var F1 = (props) => {
  
  var inputs = {
    formId: 1,
    first: null, 
    last: null, 
    username: null,
    password: null,
    email: null
  };
  //write handleChange
  return (
    <div className="form-container f1">
      <div className="fields-container">
        <input type="text" id="first-name" placeholder="First name"/>
        <input type="text" id="last-name" placeholder="Last name"/>
        <input type="text" id="username" placeholder="Username"/>
        <input type="password" id="password" placeholder="Password"/>
        <input type="email" id="email" placeholder="email"/>
      </div>
      <button onClick={() => props.handleClick(inputs)} className="next-button">NEXT</button>
    </div>
      
  )
}

var F2 = (props) => {
  
  var inputs = {
    formId: 2,
    addressLine1: null,
    addressLine2: null,
    city: null,
    state: null,
    zipcode: null
  }
  
  var stateInitials =['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','GU','HI','IA','ID','IL','IN','KS','KY','LA','MA','ME','MD','MI','MN','MO','MS','MT','NC','NE','ND','NH','NJ','NM','NY','NV','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','WA','WI','WV','WY'];
  var rows = stateInitials.map( (state, i) => {
    return <option key={i} value={state}/> 
  });
  
  return (
    <div className="form-container f2">
      <div className="fields-container">
        <input type="text" id="address-line-1" placeholder="Address 1" />
        <input type="text" id="address-line-2" placeholder="Address 2" />
        <input type="text" id="city" placeholder="City" maxLength="30"/>
        <input list="states" id="state" placeholder="State" maxLength="2"/>
        <datalist id="states">{rows}</datalist>
        <input type="text" id="zipcode" placeholder="Zip" maxLength="5"/>
      </div>
      <button className="next-button">NEXT</button>
    </div>
  )
}

var F3 = (props) => {
  var inputs = {
    formId: 3,
    cardNum: null,
    expiry: [null,null],
    cvv: null,
    zipcode: null
  };
  
  return (
    <div className="form-container f3">
      <div className="fields-container">
        <input type="text" id="card-number" placeholder="Card number" maxLength="16"/>
        <input type="month" id="expiry-date" />
        <input type="text" id="cvv" placeholder="CVV" maxLength="3" />
        <input type="text" id="zipcode" placeholder="Zip" maxLength="5" />
      </div>
      <button className="next-button">NEXT</button>
    </div>
  )
}

var Summary = (props) => {
  
}






ReactDOM.render(<App></App>, document.getElementById('root'));

