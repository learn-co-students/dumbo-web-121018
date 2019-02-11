class Person < Mammal

  attr_reader :preferred_name

  def initialize(args = {})
    @legal_name = args[:legal_name]
    @preferred_name = args[:preferred_name]
  end

  def introduce
    "Hello, I'm #{ self.preferred_name }"
  end

end



Person.new