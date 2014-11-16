angular.module('Survey', [])
    .controller('SurveyCtrl', function ($scope, api, $state, $stateParams, SurveyService) {
        $scope.survey = api.getSurvey($stateParams.id);
        console.log('Survey: ', $scope.survey);
        $scope.comments = [
            { id: 1, response : 'eternal intuitions traps most zens.'},
            { id: 2, response : 'with asparagus drink ketchup.'},
            { id: 3, response : 'where is the scurvy shark.'},
            { id: 4, response : 'where is the distant astronaut.'},
            { id: 5, response : 'dexter apolloniatess ducunt ad visus.'},
            { id: 6, response : 'with apples drink whipped cream.'},
            { id: 7, response : 'why does the cockroach grow.'},
            { id: 8, response : 'chickpeas combines greatly with fresh white bread.'},
            { id: 9, response : 'where is the ancient space suit.'},
            { id: 10, response : 'mediocre beauties traps most livings.'}
        ];

        $scope.contacts = [
            { id: 1, response : 'testemail-1@mail.com'},
            { id: 2, response : 'testemail-2@mail.com'},
            { id: 3, response : 'testemail-3@mail.com'},
            { id: 4, response : 'testemail-4@mail.com'},
            { id: 5, response : 'testemail-5@mail.com'},
            { id: 6, response : 'testemail-6@mail.com'},
            { id: 7, response : 'testemail-7@mail.com'},
            { id: 8, response : 'testemail-8@mail.com'},
            { id: 9, response : 'testemail-9@mail.com'},
            { id: 10, response :'testemail-10@mail.com'}
        ]
    });