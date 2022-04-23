Rails.application.routes.draw do
  resources :todos
  root 'todos#index'
  get 'todo_s' => 'todos#get_todos'
  get 'completed' => 'todos#completed_todos'
  get 'pending' => 'todos#pending_todos'
  post 'create_todo' => 'todos#create_todo'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
