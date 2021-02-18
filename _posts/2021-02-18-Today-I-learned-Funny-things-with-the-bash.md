---
layout: post
title: Today I learned: Funny things with the bash
---

Thanks to the excellent video [Kata in Bash](https://www.youtube.com/watch?v=N8up3OxfnCQ) from [Andrea Francia](http://andreafrancia.it/), where he creates from scratch a mini testing framework for Bash, today I learned some things:

## Do you know:
### 👉 how to split multiple inputs in a string, space separated, with a one-liner?

```
#!/bin/bash

read -ra numbers <<< "1 2"
echo "$((numbers[0]+numbers[1]))"

# returns 2
```

or comma separated

```
#!/bin/bash

IFS=, read -ra numbers <<< "1,2"
echo "$((numbers[0]+numbers[1]))"

# returns 2
```

### 👉 how to create a temporary file which will be automatically destroyed?

This is useful for those commands which require files as inputs, for example `diff`
```
> diff <(echo "something") <(echo "something_else")
1c1
< something
---
> something_else
```
It relies on [Process Substitution](https://www.gnu.org/software/bash/manual/bash.html#Process-Substitution)

### 👉 that True and False are commands?
`true` always succeeds, `false` always fails

```
> true
> echo $?
0

> false
> echo $?
1
```



