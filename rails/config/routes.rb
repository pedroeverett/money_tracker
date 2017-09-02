Rails.application.routes.draw do

  scope path: "api" do 
  resources :expenses, defaults: {format: :json}
end
  
end
