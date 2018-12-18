class Tweet
  attr_accessor :message, :username, :id

  def initialize(username, message, id=nil)
    @message = message
    @username = username
    @id = id
  end

  def self.create(username, message)
    tweet = Tweet.new(username, message)
    tweet.save
    tweet
  end

  def self.all
    sql = <<-SQL
      SELECT * FROM tweets
    SQL

    results = DB[:conn].execute(sql)

    results.map do |tweet_hash|
      Tweet.new(tweet_hash["username"], tweet_hash["message"], tweet_hash["id"])
    end
  end

  def save
    sql = <<-SQL
      INSERT INTO tweets
      (username, message)
      VALUES ("#{@username}", "#{@message}")
    SQL

    DB[:conn].execute(sql)

    self.id = Tweet.all.last.id
    "saved to the database! 🔥🔥🔥🔥🔥"
  end

end















# The Active Record Pattern
# ====================================================
# for every table in SQL, there should be a class in ruby
# - (table name is always plural, the class name is always singular )
# for every column in that table, there should be an attribute in that class
# for every row in that table, there should be an instance of that class in ruby

# OUR TABLE IN SQL:

# tweets
# id | username      | message
# ---------------------------------------
# 8  | "KevyWevy"    | "I <3 Programming"
# 9  | "coffee_dad"  | "coffee is good"

# IN RUBY:

# tweet.rb
#
# class Tweet
#   some attribute :id, :username, :message
#
#
# end
#
# Tweet.all => [tweet, tweet]
