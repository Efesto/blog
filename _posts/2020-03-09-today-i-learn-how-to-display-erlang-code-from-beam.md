---
layout: post
title: "Today I learned: How to display erlang code from beam file"
---
[Original source](https://reverseengineering.stackexchange.com/questions/16661/erlang-source-file-generation-from-beam-file)

The following code has been adapted to be executed from an `IEX` shell:

```
module_to_inspect = <module_to_inspect>
path = :code.which(module_to_inspect)
{ok,{_,[{abstract_code,{_,ac}}]}} = :beam_lib.chunks(path, [:abstract_code])
:erl_prettypr.format(:erl_syntax.form_list(ac)) |> IO.puts
```

This kind of code could be useful for debugging your build pipeline and, like in my case, troubleshoot why a `mix` config file entries weren't applied to the env