require 'ya2yaml'
require 'psych'
$LOAD_PATH.unshift 'lib'

namespace :site do
  task :deploy do
    a = []
    Dir["entries/*.md"].each do |f|
      entry = File.read(f).split("---\n")
      meta = Psych.load(entry[0])
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
      puts "#{a.count} posts indexed."
    end
    File.open("views/journal/_directory.yaml", 'w') {
      |f| f.write a.sort_by{|a| a[:date]}.reverse.ya2yaml
    }
  end
end
