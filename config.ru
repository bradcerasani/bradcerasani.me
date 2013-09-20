require 'rubygems'
require 'bundler'
require 'rack/rewrite'

use Rack::Rewrite do
  r301 '/is-money-and-wants-to-show-it/', '/'
end

Bundler.require

require './application'
run Sinatra::Application
