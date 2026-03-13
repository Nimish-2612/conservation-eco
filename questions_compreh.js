const quizData = [
  {
    "question": "If X → Y and YZ → W then XZ → W is",
    "options": [
      "Composition Rule",
      "Reflexivity Rule",
      "Union Rule",
      "Pseudo transitive Rule"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "What is the difference between supervised and unsupervised learning?",
    "options": [
      "Supervised learning requires labeled data while unsupervised learning does not.",
      "Unsupervised learning requires labeled data while supervised learning does not.",
      "Supervised learning does not require data while unsupervised learning does.",
      "There is no difference between supervised and unsupervised learning."
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which of the following is an example of a dimensionality reduction technique?",
    "options": [
      "Principal component analysis (PCA)",
      "Support vector machine (SVM)",
      "K-nearest neighbors (KNN)",
      "AdaBoost"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Which of the following is an example of a clustering algorithm?",
    "options": [
      "Decision tree",
      "Random forest",
      "K-means",
      "Gradient descent"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "You are predicting whether an email is spam or not. Based on the features, you obtained an estimated probability to be 0.75. What’s the meaning of this estimated probability?\nA) there is 75% chance that the email will be spam\nB) there is 25% chance that the email will be spam\nC) there is 75% chance that the email will not be spam\nD) there is 25% chance that the email will not be spam",
    "options": [
      "B and D",
      "A and B",
      "C and D",
      "A and D"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What are the advantages of Classification and Regression Trees (CART)?",
    "options": [
      "Decision trees require relatively less effort from users for data preparation",
      "Nonlinear relationships between parameters do not affect tree performance.",
      "Both decision trees require relatively less effort from users for data preparation and nonlinear relationships between parameters do not affect tree performance.",
      "None of these"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "What are the advantages of Classification and Regression Trees (CART)?",
    "options": [
      "Decision trees implicitly perform variable screening or feature selection",
      "Can handle both numerical and categorical data",
      "Can handle multi-output problems.",
      "All of these"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "What are the disadvantages of Classification and Regression Trees (CART)?",
    "options": [
      "Decision trees can be unstable because small variations in the data might result in a completely different tree being generated",
      "Decision trees require relatively less effort from users for data preparation",
      "Nonlinear relationships between parameters do not affect tree performance.",
      "Decision trees implicitly perform variable screening or feature selection"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Decision tree learners may create biased trees if some classes dominate. What’s the solution of it?",
    "options": [
      "balance the dataset prior to fitting",
      "imbalance the dataset prior to fitting",
      "balance the dataset after fitting",
      "No solution possible"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What is the maximum depth in a decision tree?",
    "options": [
      "the length of the longest path from a root to a leaf",
      "the length of the shortest path from a root to a leaf",
      "the length of the longest path from a root to a sub-node",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Decision tree can be used for ______.",
    "options": [
      "classification",
      "regression",
      "Both classification and regression",
      "None of these"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Decision tree is a ______ algorithm.",
    "options": [
      "supervised learning",
      "unsupervised learning",
      "Both supervised learning and unsupervised learning",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In which of the following cases will K-means clustering fail to give good results?\n1) Data points with outliers\n2) Data points with different densities\n3) Data points with nonconvex shapes",
    "options": [
      "1 and 2",
      "2 and 3",
      "1 and 3",
      "All of these"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Suppose, your target variable is the price of a house using Decision Tree. What type of tree do you need to predict the target variable?",
    "options": [
      "classification tree",
      "regression tree",
      "clustering tree",
      "dimensionality reduction tree"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Suppose, your target variable is whether a passenger will survived or not using Decision Tree. What type of tree do you need to predict the target variable?",
    "options": [
      "classification tree",
      "regression tree",
      "clustering tree",
      "dimensionality reduction tree"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In SVM, if the number of input features is 3, then the hyperplane is a _____.",
    "options": [
      "line",
      "circle",
      "plane",
      "None of these"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "In SVM, the dimension of the hyperplane depends upon which one?",
    "options": [
      "the number of features",
      "the number of samples",
      "the number of target variables",
      "All of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In SVM, we are looking to maximize the margin between the data points and the hyperplane. The loss function that helps maximize the margin is called ______.",
    "options": [
      "hinge loss",
      "categorical cross-entropy loss",
      "binary cross-entropy loss",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In SVM, what is a hyperplane?",
    "options": [
      "decision boundaries",
      "data points",
      "features",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What’s the objective of the support vector machine algorithm?",
    "options": [
      "to find an optimal hyperplane in an N-dimensional space that distinctly classifies the data points where N is the number of features.",
      "to find an optimal hyperplane in an N-dimensional space that distinctly classifies the data points where N is the number of samples.",
      "to find an optimal hyperplane in an N-dimensional space that distinctly classifies the data points where N is the number of target variables.",
      "None of these"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "In which Strategy of data reduction redundant attributes are detected.",
    "options": [
      "Date cube aggregation",
      "Numerosity reduction",
      "Data compression",
      "Dimension reduction"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Fraud Detection, Image Classification, Diagnostic, and Customer Retention are applications in which of the following",
    "options": [
      "Unsupervised Learning: Regression",
      "Supervised Learning: Classification",
      "Unsupervised Learning: Clustering",
      "Reinforcement Learning"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "Suppose you are using RBF kernel in SVM with high Gamma value. What does this signify?",
    "options": [
      "The model would consider even far away points from hyperplane for modelling.",
      "The model would consider only the points close to the hyperplane for modelling.",
      "The model would not be affected by distance of points from hyperplane for modelling.",
      "None of the above"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "What is shape of dendrites like?",
    "options": [
      "Oval",
      "Round",
      "Tree",
      "Rectangular"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Which of the following is not a type of supervised learning?",
    "options": [
      "Classification",
      "Regression",
      "Clustering",
      "None of the above"
    ],
    "correctAnswer": "2"
  },
  {
    "question": "Which of the following is true about regularized linear regression model?",
    "options": [
      "Increase in regularization parameter (lambda) will make the model to underfit the data and the validation error will go up.",
      "Decrease in regularization parameter (lambda) will make the model to overfit the data and the training error go up",
      "Increase in regularization parameter (lambda) will make the model to underfit the data and the training error go down",
      "All of these are true"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Logistic Regression is a Machine Learning algorithm that is used to predict the probability of a ___?",
    "options": [
      "categorical independent variable",
      "categorical dependent variable",
      "numerical dependent variable",
      "numerical independent variable"
    ],
    "correctAnswer": "1"
  },
  {
    "question": "HTML5 features, include native audio and video support without the need for.",
    "options": [
      "Flash",
      "Canvas",
      "SVG",
      "Applet"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "What does the status code – 404 indicate",
    "options": [
      "The server cannot find the requested resource.",
      "The client cannot find the requested resource",
      "The server-client connection was not established",
      "If it is an unauthenticated request"
    ],
    "correctAnswer": "0"
  },
  {
    "question": "Cross-Site Scripting (XSS) is a",
    "options": [
      "Cross domain scripting language",
      "Client side scripting language",
      "A type of web application vulnerability",
      "Cross platform scripting language"
    ],
    "correctAnswer": "0"
  }
]

  
