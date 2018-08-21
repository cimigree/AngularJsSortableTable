app.factory('stringService', function () {
  return {
    processString: function(input) {
      if(!input) {
        return input
      }
      var output = "";
      for (var i=0; i < input.length; i++ ) {
        // adds a space b4 uppercase letters except at first position
        if (i > 0 && input[i] == input[i].toUpperCase()) {
          output = output + " ";
        }
        output = output + input[i];
      }
      return output;
    }
  };
});