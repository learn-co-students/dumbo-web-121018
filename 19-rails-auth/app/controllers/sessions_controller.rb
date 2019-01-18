class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def new
    # Logging In
    # Showing the login form
  end

  def create
    # Actual logic of loggin in
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to dinosaurs_path
    else
       # Either render/redirect_to the page again
       redirect_to "/login"
       # or take them to signup
    end
  end

  def destroy
    # session[:user_id] = nil
    session.delete :user_id

    redirect_to login_path











  end
end
