
import { Mongo } from 'meteor/mongo';

subscribers = new Mongo.Collection('subscribers');

subscribers.deny({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    },
});

export const Subscribers = subscribers;