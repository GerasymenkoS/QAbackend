'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.post('login', 'UserController.login').validator('LoginUser')
  Route.post('register', 'UserController.register').validator('RegisterUser')

  Route.get('user', 'UserController.user')
  Route.get('users/:id', 'UserController.show').middleware('auth')

  Route.resource('questions', 'QuestionController').middleware('auth')
  Route.resource('questions/:question_id/answers', 'AnswerController').middleware('auth')
}).prefix('api')
