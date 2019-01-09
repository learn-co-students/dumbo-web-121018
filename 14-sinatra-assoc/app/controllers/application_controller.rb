# ApplicationController
# =====================
#  - Represents the top-level controller for our application
#  - A controller will **inherit** from Sinatra::Base
class ApplicationController < Sinatra::Base

  # Since we are writing a non-standard Sinatra application
  # (a.k.a. we are writing it with folders and a modular pattern),
  # we need to say where the root is and where the app is supposed
  # to find its views.
  set :root, File.join(File.dirname(__FILE__), '..')
  set :views, File.join(root, "views")

  set :method_override, true

  # To see all persons/peoples
  # Person.all

  # REST -> Representational State Transfer
  # A convention for showing "everything" of one model
  # Index Action -> "Shows us everything of one model"
  # "/<model name as plural>"
  get "/people" do
    @people = Person.all
    erb :'/people/index'
  end

  # New Action -> "Takes us to a form to create a new person"
  get "/people/new" do
    erb :'/people/new'
  end

  post "/people" do
    person = Person.new(params)
    person.save

    # Matches the format below "/people/:id"
    redirect "/people/#{person.id}"
  end

  # Show Action -> Show us A SPECIFIC PERSON
  get "/people/:id" do
    @person = Person.find(params["id"])
    erb :'/people/show'
  end

  # Edit Action - "Show us a form to edit"
  get "/people/:id/edit" do
    @person = Person.find(params[:id])
    erb :'/people/edit'
  end

  # Update Action - "Performs the update from whatever changes"
  # UPDATED AFTER LECTURE
  patch "/people/:id" do
    # Since we're updating this individual, we'll first need to find them
    @person = Person.find(params[:id])

    # Then we can update using all of the data we're sending back
    # THERE IS A REASON YOU MUST DO THIS LONGHAND and not use Mass Assignment
    # We'll talk about it in lecture and we need to build **strong params**
    # For now please write update longhand
    binding.pry
    @person.update(params["person"])
    redirect "/people/#{@person.id}"
  end

  # Delete Action => "Remove this individual from the database"
  # This action doesn't have a complimentary "view" per se, however,
  # what we do is reference this in the show page and it will delete in backend
  # and redirect us to the index
  delete "/people/:id" do
    @person = Person.find(params[:id])
    @person.destroy

    redirect "/people"
  end


  get "/corgissssssssssssssss" do
    "Wowowowowowowowow"
  end


  # Index
  # What is the route and the method
  # Show all of the animals
  get "/animals" do
    # 1. Get all the animals
    @animals = Animal.all
    # 2. Render them on the page
    # "/views/animals/index.erb"
    erb :'/animals/index'
  end

  # New -> A form has to be made
  get '/animals/new' do
    # We need to showcase the form
    erb :'/animals/new'
  end

  post '/animals' do
    # 1. Create the animal from the params
    @animal = Animal.create(params["animal"])
    # 2. After it is created, we want to redirect to see
    # that animal (aka. go to the show page)
    redirect "/animals/#{@animal.id}"
  end

  # Show
  get "/animals/:id" do
    # 1. We want to find the animal baased upon the id
    @animal = Animal.find(params[:id])
    # 2. Render the view based upon the view
    erb :'/animals/show'
  end

  # Edit -> It will show us a form to edit the data
  get "/animals/:id/edit" do
    # 1. Find the animal to update
    # We want to do this so we can populate our form
    @animal = Animal.find(params[:id])

    # 2. Show the edit form 
    erb :'/animals/edit'
  end

  # Update Action
  patch "/animals/:id" do
    # 1. Finding the animal to update
    @animal = Animal.find(params[:id])
    # 2. Updating the animal with the data from the form
    @animal.update(params["animal"])
    # 3. Take us to the updated animal
      
  end

  # Destroy Action
  delete "/animals/:id" do
    # 1. Find the animal to delete
    @animal = Animal.find(params[:id])
    # 2. Delete the animal
    @animal.delete
    # 3. Redirect to the list of all animals
    redirect "/animals"
  end
end
