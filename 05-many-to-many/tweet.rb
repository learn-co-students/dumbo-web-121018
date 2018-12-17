class Tweet
  attr_reader :content, :author
  @@all = []

  def initialize(content, author)
    @content = content
    @author = author

    @@all << self
  end

  def username
    # self.user.username
    @author.username
  end

  def self.all
    @@all
  end

  def likers
    # this gives us all of the likes that
    # are on this tweet
    tweets_likes = Like.all.select do |like|
      like.tweet == self
    end

    # we need to pull out the
    # users inside of each like
    tweets_likes.map do |like|
      like.user
    end

  end





end
