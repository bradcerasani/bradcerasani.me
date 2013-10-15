require 'rubygems'
require 'rack/rewrite'
require 'bundler'
Bundler.require

$LOAD_PATH.unshift 'lib'

use Rack::Rewrite do
  r301 '/is-money-and-wants-to-show-it/', '/'
  r307 '/journal/', '/'
end

require './application'
run Sinatra::Application
