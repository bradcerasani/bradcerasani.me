title: It's Working
excerpt: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
date: 2013-08-19
tags: general
---

What ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero labore deserunt quis aperiam cumque ipsa assumenda quod similique accusantium repellat ab ipsum error necessitatibus repudiandae magnam excepturi minus obcaecati.

## Learning Ruby the Hard Way

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, aperiam, sunt, quidem, perferendis odit quisquam fuga cum hic ipsa velit obcaecati harum labore atque praesentium ipsam nesciunt suscipit minima! Dignissimos.

```ruby
class WhatRender < Redcarpet::Render::HTML
  include Redcarpet::Render::SmartyPants
  def block_code(code, language)
    Pygments.highlight(code, lexer: language.to_sym, options: {linespans: 'line'})
  end
end
```

### Codecademy, Codeschool, & Treehouse

>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, quia, atque dignissimos impedit at sapiente maxime maiores quo reiciendis quibusdam architecto totam aliquam reprehenderit perferendis accusamus. Velit, sed consectetur dolorum.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus ipsum tenetur voluptas commodi ea quidem explicabo reiciendis eum sequi? Voluptatem, atque et unde tenetur delectus vitae nobis suscipit necessitatibus!
