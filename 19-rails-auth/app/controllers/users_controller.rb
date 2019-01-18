class UsersController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]


  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)

    session[:user_id] = @user.id # to be logged in
    redirect_to dinosaurs_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
