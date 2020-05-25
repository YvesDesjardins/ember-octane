import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  loginAsUserWithId(val) {
    console.log('UserId:', val)
  }

  /**
   *
   * @param {Event & { target: HTMLSelectElement }} event
   */
  @action
  onSelectChanged(event) {
    this.userId = event.target.value;
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
