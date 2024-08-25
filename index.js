//...........

function checkgrade(score) {
  if (typeof score !== "number" || isNaN(score)) {
    console.log("Not a Number");
  } else if (score === 100) {
    console.log("Perfect Score");
  } else if (score < 100 && score >= 85) {
    console.log("You got an A");
  } else if (score < 85 && score >= 75) {
    console.log("You got a B");
  } else if (score < 75 && score >= 65) {
    console.log("You got a C");
  } else if (score < 65 && score >= 50) {
    console.log("You got a D");
  } else if (score < 50 && score >= 0) {
    console.log("You got an F");
  } else {
    console.log("Invalid Score");
  }
}

checkgrade(9);
checkgrade(100);
checkgrade("A");

function checkgradesw(score) {
  switch (true) {
    case typeof score !== "number" || isNaN(score):
      console.log("Not a Number");
      break;
    case score === 100:
      console.log("Perfect Score");
      break;
    case score < 100 && score >= 85:
      console.log("You got an A");
      break;
    case score < 85 && score >= 75:
      console.log("You got a B");
      break;
    case score < 75 && score >= 65:
      console.log("You got a C");
      break;
    case score < 65 && score >= 50:
      console.log("You got a D");
      break;
    case score < 50 && score >= 0:
      console.log("You got an F");
      break;
    default:
      console.log("Invalid Score");
      break;
  }
}

checkgradesw(66);
checkgradesw(100);
checkgradesw("A");
