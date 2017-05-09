
var app = angular.module('mauroCendon', ['ngScrollSpy', 'angularSmoothscroll']);

app.controller('navController', function($scope) {
  $scope.buttons = [{label: "Acerca de mi", identifier: "button_aboutme", target: "aboutme-target"},
      {label: "Experiencia", identifier: "button_experience", target: "experience-target"},
      {label: "Skills", identifier: "button_skills", target: "skills-target"},
      {label: "Referencias", identifier: "button_references", target: "references-target"}
    ];;
});

app.controller('skillsController', function($scope) {
  $scope.skills = ['PHP',
    'Zend Framework',
    'Magento',
    'Java EE',
    'Javascript',
    'Android',
    'Windows',
    'NodeJS',
    'jQuery',
    'OOP',
    'CSS',
    'Cloud Apps',
    'Doctrine ORM',
    'Loopback JS',
    'Python',
    'AngularJS',
    'ReactJS',
    'SOA',
    'Web Services',
    'XML',
    'JSON',
    'HTML5',
    'SQL',
    'MongoDB',
    'Redis',
    'Git',
    'SVN',
    'Yii',
    'CakePHP',
    'AJAX',
    'Smarty',
    'Linux',
    'Ubuntu',
    'Android Studio',
    'Ionic',
    'Apache Cordova',
    'Responsive Design',
    'Networking',
    'REST API',
    'Scrum',
    'Unit Testing',
    'Design Patterns',
    'UML',
    'Amazon WS',
    'JIRA',
    'Confluence',
    'Trello',
    'Bamboo'
  ];

});
