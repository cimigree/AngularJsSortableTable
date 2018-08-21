app.filter("convertGender", function() {
  return function(gender) {
    switch (gender) {
      case 1:
        return "Female";
      case 2:
        return "Male";
      case 3:
        return "Nonbinary";
    }
  }
})