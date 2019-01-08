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
    erb :index
  end

  # New Action -> "Takes us to a form to create a new person"
  get "/people/new" do
    erb :new
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
    erb :show
  end

  # Edit Action - "Show us a form to edit"
  get "/people/:id/edit" do
    @person = Person.find(params[:id])
    erb :edit
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
    @person.update(name: params[:name], age: params[:age], pronouns: params[:pronouns])
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

end
