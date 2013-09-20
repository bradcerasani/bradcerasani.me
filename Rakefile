require 'yaml'
require 'ya2yaml'
$LOAD_PATH.unshift 'lib'

require 'application'

namespace :site do
  task :deploy do
    system 'rake site:rebuild'
  end
  task :rebuild do
    unless File.exists?('tmp/repo')
      puts 'Cloning posts...'
      `git clone https://github.com/bcerasani/journal.git tmp/repo`
    else
      puts 'Updating posts...'
      'cd tmp/repo && git pull origin master'
    end

    a = []
    Dir["tmp/repo/entries/*.md"].each do |f|
      entry = File.read(f).split("---\n")
      meta = YAML::load(entry[0])
      # matches = f.match(/\/(\d{4})-(\d{2})-(\d{2})-([\w\-]+)\.md$/)
      # key = matches[4]
      # puts "#{key}"
      a.push({
        title: meta['title'],
        excerpt: meta['excerpt'],
        date: meta['date'],
        tags: meta['tags'],
        # slug: "/journal/" << key,
        slug: "/journal/" << File.basename(f, ".md"),
      })
    end
    File.open("views/journal/_directory.yaml", 'w') {
      |f| f.write a.sort_by{|a| a[:date]}.reverse.ya2yaml
    }
  end
end
