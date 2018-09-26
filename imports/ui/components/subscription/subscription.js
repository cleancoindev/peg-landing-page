import { Meteor } from 'meteor/meteor';
import './subscription.html';

Template.subscription.events({
  'submit #subscription-form'(event) {
    event.preventDefault();

    const target = event.target;
    const email = target.email;

    Meteor.call('subscribers.insert', email.value, (error) => {
      if (error) {
        Bert.alert({
          title: 'Error',
          message: 'Please try again.',
          type: 'danger',
          style: 'growl-top-right'
        });
      } else {
        email.value = '';
        Bert.alert({
          title: 'Message',
          message: "Thank you for subscribing. We'll get back to you soon.",
          type: 'success',
          style: 'growl-top-right'
        });
      }
    });
  },
});
