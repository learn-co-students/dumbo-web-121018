class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def tweets
    Tweet.all.select do |tweet|
      self == tweet.user
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end


end
