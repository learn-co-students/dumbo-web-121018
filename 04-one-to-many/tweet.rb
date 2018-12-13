class Tweet
  attr_reader :content, :user
  @@all = []

  def initialize(content, user)
    @content = content
    @user = user

    @@all << self
  end

  def username
    # self.user.username
    @user.username
  end

  def self.all
    @@all
  end

end
