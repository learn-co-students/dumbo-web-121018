class Tweet
  attr_accessor :message, :username, :is_hungry, :date

  # def message
  #   @message
  # end

  # def message=(new_message)
  #   @message = new_message
  # end

  Tweet.new(
    {
      message: "Hello World",
      username: "JaneyWaney",
      is_hungry: true,
      date: "today"
    }
  )
  def initialize(attributes_hash)
    # binding.pry
    # @message = attributes_hash[:message]
    # @username = attributes_hash[:username]
    # @is_hungry = attributes_hash[:is_hungry]
    # @date = attributes_hash[:date]

    # tweet.send("message=", "Test")
    attributes_hash.each do |key, value|
      if self.respond_to?("#{key}=")
        self.send("#{key}=", value)
      end
    end

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
