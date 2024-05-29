function skillsMember() {
  return {
    member: {
      skills: {
        add: function (skill) {
          console.log('Adding skill ' + skill);
        },
        remove: function (skill) {
          console.log('Removing skill ' + skill);
        }
      }
    }
  };
}