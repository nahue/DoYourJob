window.Events = {};

Events.handleNaturally = function(e) {
    e.preventDefault();
    e.stopPropagation();
};
