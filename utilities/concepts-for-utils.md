```css
@utility {
    name: none;
    property: display;
    values: block, inline-block, flex;
}

@utility {
    name: p;
    property: padding;
    values: range(var(--sizes-*), 1, 6);
}
```

Step 1: build postcss parser
Step 2: make it JIT
