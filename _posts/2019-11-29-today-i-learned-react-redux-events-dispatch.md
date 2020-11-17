---
layout: post
title: "Today I learned: How to dispatch React-Redux events using only browser console"
---
```javascript 
base = document.getElementById('root')._reactRootContainer._internalRoot.current
store = nullwhile (store == null) {
    try {
        store = base.pendingProps.store
    } 
    catch (e) {
    }
    base = base.child
}
store.dispatch(your_event)
```

Results may vary
