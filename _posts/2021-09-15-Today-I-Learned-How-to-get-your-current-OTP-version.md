---
layout: post
title: "Today I Learned: How to get your current OTP version"
---

You can get your current OTP version, if Erlang is installed on your machine, by using:

```Erlang
4> file:read_file(filename:join([code:root_dir(), "releases", erlang:system_info(otp_release), "OTP_VERSION"])).
{ok,<<"24.0.2\n">>}
```

Or in Elixir:

```Elixir
iex(3)> :filename.join([:code.root_dir(), "releases", :erlang.system_info(:otp_release), "OTP_VERSION"])  |> File.read
{:ok, "24.0.2\n"}
```