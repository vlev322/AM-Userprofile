import React, { Component, Fragment } from 'react';

import styles from './generalParameters.sass'

import Feild from './feild/feild'
import Title from './title/title'

class GeneralParameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstname: '',
      secondname: '',
      password: '',
      email: '',
      phone: '',
      visitaddr: ''
    },
      this.handleChange = this.handleChange.bind(this);
  }

 handleSubmit(event) {
    event.preventDefault();
 }

 handleChange(event) {
  this.setState({
      [event.target.name]: event.target.value
    });
}
  render() {
    return (
      <div className={styles.generalParameters}>
        <div className={styles.title}>
          <h2>General Parameters</h2>
          <span>Secure Connection</span>
        </div>
        <div className={styles.personal}>
          <Title title='Personal Information' />
          <div className={styles.names}>
            <img src='https://randomuser.me/api/portraits/men/50.jpg'></img>
            <form onSubmit={this.handleSubmit}>
            <Feild
              id="username"
              labelText="Username"
              type="text"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Feild
              id="firstname"
              labelText="First Name"
              type="text"
              placeholder="Enter username"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <Feild
              id="secondname"
              labelText="Second Name"
              type="text"
              placeholder="Enter Second Name"
              name="secondname"
              value={this.state.secondname}
              onChange={this.handleChange}
            />
            <Feild
              id="password"
              labelText="Password"
              type="password"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            </form>
          </div>          
        </div>

        <div className={styles.contact}>
            <Title title='Contact Information'/>   
          <div className={styles.contacts}>
            <form onSubmit={this.handleSubmit}>
              <Feild
                  id="email"
                  labelText="Email"
                  type="email"
                  placeholder="example@mail.com"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Feild
                  id="phone"
                  labelText="Telephone"
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
                <div className={styles.formGroup}>
                  <label htmlFor='visitaddr'>Visiting address</label>
                  <textarea
                    id='visitaddr'
                    placeholder='Enter address'
                    name='visitaddr'
                    value={this.state.visitaddr}
                    onChange={this.handleChange}
                  >
                  </textarea>
                </div>
            </form>
          </div>          
        </div>

        <div>
          <Title title='Setting Information'/>   
          <div  className={styles.settingInformation}>
            <div>
              <div className={styles.roles}>
                <span>Roles</span>
                <div></div >
              </div>
              <div className={styles.group}>
                <span>Group</span>
                <div></div>
              </div>              
            </div>

          </div>  
        </div>

      </div>
    );
  }
}

export default GeneralParameters;