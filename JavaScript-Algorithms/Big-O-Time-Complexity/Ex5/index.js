const sendEmails = (email, recepients) =>
  recepients.forEach((r) => r.sendEmail(email));

const emailManager = function () {
  let email = generateEmail();

  $.get("/recepients", function (recepients) {
    sendEmails(email, recepients);
  });
};

// Complexity - O(n)
