require 'rubygems'
require 'rack/rewrite'
require 'bundler'
Bundler.require

$LOAD_PATH.unshift 'lib'

use Rack::Rewrite do
  r307 '/journal/', '/'
end

require './application'
run Sinatra::Application
