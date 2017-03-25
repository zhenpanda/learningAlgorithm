// constructor functions

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

var user1 = new User("John", "Smith", 26, "male");

// adding property
User.prototype.emailDomain = "@facebook.com"
//__proto__ doner prototype
User.prototype.getEmailAddress = function(){
  return this.firstName + this.lastName + this.emailDomain;
}
user1.getEmailAddress();
