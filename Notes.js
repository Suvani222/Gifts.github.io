document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("generateButton")
    .addEventListener("click", function () {
      // Get user input
      var age = parseInt(document.getElementById("age").value);
      var relationship = document.getElementById("relation").value;
      var hobbies = document.getElementById("hobbies").value;

      // Split the hobbies string into an array
      var hobbiesArray = hobbies.split(",");

      // Generate a random index for each category
      var ageIndex = getRandomInt(0, ageGifts.length - 1);
      var relationshipIndex = getRandomInt(0, relationshipGifts.length - 1);
      var hobbyIndex = getRandomInt(0, hobbiesArray.length - 1);

      // Retrieve a random gift from each category
      var ageGift = ageGifts[ageIndex];
      var relationshipGift = relationshipGifts[relationshipIndex];
      var hobbyGift = hobbyGifts[hobbyIndex];

      // Display the random gift suggestion
      document.getElementById("ageGift").textContent = "Age: " + ageGift;
      document.getElementById("relationshipGift").textContent =
        "Relationship: " + relationshipGift;
      document.getElementById("hobbyGift").textContent = "Hobby: " + hobbyGift;
      document.getElementById("giftOutput").classList.remove("hidden");
    });

  // Function to generate a random integer within a range
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Sample gift suggestions for each category
  var ageGifts = [
    "Board game",
    "Fitness tracker",
    "Cookbook",
    "Movie tickets",
    "Art supplies",
  ];
  var relationshipGifts = [
    "Handmade card",
    "Personalized photo album",
    "Engraved necklace",
    "Spa gift set",
    "Gourmet chocolate",
  ];
  var hobbyGifts = [
    "Gardening tools",
    "Cooking utensils",
    "Sports equipment",
    "Musical instrument",
    "Book on their favorite hobby",
  ];
});
