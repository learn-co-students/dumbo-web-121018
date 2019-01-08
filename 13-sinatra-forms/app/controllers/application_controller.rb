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


  get "/people/new" do
    "This will be where we will add a new form to create a person"
  end

  # Show Action -> Show us A SPECIFIC PERSON
  get "/people/:id" do
    @person = Person.find(params["id"])
    erb :show
    # binding.pry
  end

  get "/corgissssssssssssssss" do
    "Wowowowowowowowow"
  end

end
