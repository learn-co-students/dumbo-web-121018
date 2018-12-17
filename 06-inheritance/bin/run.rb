require 'pry'

require_relative '../lib/set_on_fire'
require_relative '../lib/animal'
require_relative '../lib/cat'

require_relative '../lib/ardvark'
require_relative '../lib/lion'
require_relative '../lib/parrot'
require_relative '../lib/platapus'
require_relative '../lib/raptor'
require_relative '../lib/tiger'

# Lion
# - eat
# - sleep
# - roar
# Parrot
# - talk
# - eat
# - fly
# - neediness level?
# Tiger
# - eat
# - hunt
# - sleep
# Platapus
# - swim
# - poison
# Ardvark
# - lick
# - roll
# Raptor
# - eat
# - die
# - run

ardvark = Ardvark.new("eddie")
tiger = Tiger.new("tigger")
lion = Lion.new("simba")

binding.pry

puts "done"
