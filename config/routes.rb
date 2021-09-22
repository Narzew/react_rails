# frozen_string_literal: true

Rails.application.routes.draw do
  get 'lesson/index'
  get 'lesson/show/:id', to: 'lesson#show', as: 'lesson'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
