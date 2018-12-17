class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def tweets
    Tweet.all.select do |tweet|
      self == tweet.author
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def like_tweet(tweet)
    Like.new(tweet, self)
  end

  def likes
    Like.all.select do |like|
      like.user == self
    end
  end

  def liked_tweets
    # step 1.
    # Find every like this user "liked"
    # we do this by selecting all of the likes
    # where the like's user is self
    # Like.all => [like, like, like, like, like, like]
    users_likes = Like.all.select do |like|
      like.user == self
    end
    # users_likes => [like, like, like]

    # step 2.
    # turn all of our user's likes, into tweets
    # users_likes => [like, like, like]
    users_likes.map do |like|
      like.tweet
    end
    # => [tweet, tweet, tweet]
    # likes.map do |like|
    #   like.tweet
    # end
  end

  def number_of_likes
    likes.count
  end

  def liked_tweets_contents
    liked_tweets.map do |tweet|
      tweet.content
    end
  end

end
