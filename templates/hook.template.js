/**
 * <%= id %> hook
 */

module.exports = function (sails) {
  return {
    
    <%= defaults %>
    <%= configure %>
    <%= routes %>    
    // Run when sails loads-- be sure and call `next()`.
    initialize: function (next) {
      return next();
    }

  };
};
