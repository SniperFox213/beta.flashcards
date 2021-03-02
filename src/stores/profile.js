// Importing modules
import { writable } from "svelte/store";

import Cookie from "cookie-universal";
const cookies = Cookie();

// Importing actions
import { loadProfile } from "../actions/profile";

// Store itself
const store = () => {
  // Getting some required methods
  const { subscribe, update } = writable({});

  // And now let's build and return this store
  return {
    subscribe,

    // Function to initialize our profile
    initialize: () => {
      return new Promise((resolve, reject) => {
        // Let's firstly get our profile token
        // from our cookie storage
        const token = cookies.get('token');

        if (token == null) {
          reject("createProfile");
        } else {
          // Loading our account information
          loadProfile(token)
          .then((response) => {
            // Updating our store
            update(() => {
              resolve(response);
              return response;
            });
          }).catch(() => {
            reject();
          });
        };
      });
    }
  }
};

export default store();