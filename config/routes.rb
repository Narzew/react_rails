# frozen_string_literal: true

Rails.application.routes.draw do
  get 'lesson/index'
  get 'lesson/show/:id', to: 'lesson#show', as: 'lesson'
  get 'json/lesson/index', to: 'lesson#json_index'
  get 'json/lesson/show/:id', to: 'lesson#json_show', as: 'json_lesson'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
