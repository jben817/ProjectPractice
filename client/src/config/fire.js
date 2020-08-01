  import firebase from 'firebase';
  const firebaseConfig = {
      apiKey: "AIzaSyDkjznjPuvMbx1Yp1VfIhKUfKk9cS_DpbY",
      databaseURL: "https: //airbnb-com.p.rapidapi.com/listings/nearby/37.788719679657554/-122.40057774847898",
      "x-rapidapi-host": "airbnb-com.p.rapidapi.com",
      "x-rapidapi-key": "e9a234de2amshfb394e36da3e9f0p1fe03fjsnda119de32de4",
      "useQueryString": true
  };

  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;