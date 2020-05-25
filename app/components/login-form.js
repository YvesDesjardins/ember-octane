import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  loginAsUserWithId(val) {
    console.log('UserId:', val)
  }

  /**
   * 
   * @param {Event & {target: HTMLFormElement}} event 
   */

  @action
  onLoginFormSubmit(event) {
    event.preventDefault();

    const { target } = event;
    const val = target.querySelector('select').value;
    this.loginAsUserWithId(val);
    // debugger;
  }
}
