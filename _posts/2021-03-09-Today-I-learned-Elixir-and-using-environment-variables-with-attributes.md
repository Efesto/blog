---
layout: post
title: "Today I learned: Elixir and using environment variables with attributes"
---

Considering the following code snippet:

```Elixir
defmodule Variables do
  @variable Application.get_env(:an_application, :variable)

  def get_compiled do
    @variable
  end

  def get_runtime do
    Application.get_env(:an_application, :variable)
  end
end
```

with the following mix config file:

```Elixir
  import Config

  config :an_application, variable: System.get_env("VARIABLE")
```

when we do:

```Shell
  VARIABLE="666" mix compile
  iex -S mix
  iex(1)> Variables.get_compiled
  "666"
  iex(2)> Variables.get_runtime
  nil
```

but when we do:

```Shell
  mix compile --force
  VARIABLE="666" iex -S mix
  iex(1)> Variables.get_compiled
  nil
  iex(2)> Variables.get_runtime
  "666"
```

Because `@variable` is initialized at compilation time.

Lesson learned: use attributes only for variables that are statically set in config, for the rest like variables set with environment variables, define a function