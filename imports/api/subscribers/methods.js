
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Subscribers } from './subscribers';

Meteor.methods({
  'subscribers.insert'(email) {
    check(email, ValidEmail);

    return Subscribers.insert({
      email,
      createdAt: new Date(),
    });
  },
});
